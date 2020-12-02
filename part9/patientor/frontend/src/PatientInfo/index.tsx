import React from 'react';
import {useParams} from 'react-router-dom'
import {Patient,Entry, EntryType,NewEntry} from '../types';
import axios from 'axios';
import {useStateValue,getPatientInfo,addPatientEntry} from '../state';
import {apiBaseUrl} from '../constants';
import {Icon,Button} from 'semantic-ui-react';
import EntryDetail from '../EntryDetail/EntryDetail';
import {EntryTypeOption} from '../AddPatientModal/FormField';
import AddEntryModal from '../AddEntryForm/AddEntryModal';

const EntryTypeOptions: EntryTypeOption[]=[
    {value: EntryType.HealthCheck, label:'HealthCheck'},
    {value: EntryType.Hospital, label:'Hospital'},
    {value: EntryType.OccupationalHealthcare, label:'OccupationalHealthcare'}
]

const PatientInfo:React.FC=()=>{
    const [{patientsInfo,diagnosis},dispatch] = useStateValue();
    const {id}=useParams<{id: string}>();
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | undefined>();
    const [EntryType,setEntryType]=React.useState<string>('HealthCheck')

    const openModal = (): void => setModalOpen(true);

    const closeModal = (): void => {
        setModalOpen(false);
        setError(undefined);
    };

    const submitEntry=async(values: NewEntry)=>{
        try{
            const alteredPatient=await axios.post(`${apiBaseUrl}/patients/${id}/entries`,values);
            dispatch(addPatientEntry(alteredPatient.data))
            closeModal();
        }catch(err){
            setError(err.response.data.error);
        }
    }
    
    let patient=Object.values(patientsInfo).find(p=>p.id===id);

    const iconSetter=(gender:string):string=>{
        switch(gender){
            case 'male':
                return 'mars';
            case 'female':
                return 'venus';
            default:
                return 'genderless';
        }
    }
    
    const fetchPatient=async(id:string)=>{
        try{
        const fetchedPatient=await axios.get(`${apiBaseUrl}/patients/${id}`);
        if(fetchedPatient.data){
            patient=fetchedPatient.data as Patient;
            dispatch(getPatientInfo(patient));
        }
        }catch(err){
            return null
        }
    }

    if(!patient ){
        fetchPatient(id);
        return null;
    }
    if(Object.keys(diagnosis).length===0){
        return null;
    }
    
    return(
        <div>
            <h1>{patient.name} <Icon className={iconSetter(patient.gender)}/></h1>
            <p>ssn: {patient.ssn}<br/>
                occupation: {patient.occupation}</p>
            <h3>entries</h3>
            {patient.entries.map((entry:Entry)=>
                <EntryDetail key={entry.id} entry={entry}/>
            )}
            <div id='entryFormOptionContainer'>
                <select id='entryTypeOption' name="entryType" onChange={({target})=>setEntryType(target.value)}>
                    {EntryTypeOptions.map(e=><option key={e.label} value={e.value}>{e.label}</option>)}
                </select>
                <AddEntryModal EntryType={EntryType as EntryType} onSubmit={submitEntry} error={error} onClose={closeModal} modalOpen={modalOpen}/>
                <Button onClick={() => openModal()}>Add New Entry</Button>
            </div>
        </div>
    )
}

export default PatientInfo;