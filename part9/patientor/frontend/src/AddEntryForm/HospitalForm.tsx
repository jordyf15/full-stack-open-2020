import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";
import {NewHospital} from '../types';
import {useStateValue} from '../state/state';
import {TextField} from '../AddPatientModal/FormField';
import {DiagnosisSelection} from '../AddPatientModal/FormField';



interface Props{
    onSubmit:(values: NewHospital)=>void;
    onCancel:()=>void;
}

const HospitalForm:React.FC<Props>=({onSubmit,onCancel})=>{
    const [{ diagnosis }] = useStateValue();
    document.getElementById('dischargeDate')?.addEventListener('focus',()=>{
        console.log('clicked');
    })

    return(
        <Formik
        initialValues={{
            date: '',
            description:'',
            type:'Hospital',
            specialist:'',
            diagnosisCodes:[],
            discharge:{
                date:'',
                criteria:''
            }
        }}
        onSubmit={onSubmit}
        validate={values=>{
            const requiredError='Field is required!';
            const errors:{[field: string]:string}={};
            if(!values.date){
                errors.date=requiredError
            }
            if(!values.discharge.criteria){
                errors['discharge.criteria']=requiredError
            }
            if(!values.discharge.date){
                errors['discharge.date']=requiredError
            }
            if(!values.description){
                errors.description=requiredError
            }
            if(!values.specialist){
                errors.specialist=requiredError
            }
            return errors;
        }}>
        {({isValid,dirty,setFieldValue,setFieldTouched})=>{
            return(
                <Form className='form ui'>
                    <Field label='Date *' placeholder='yyyy-mm-dd' name='date' component={TextField}/>
                    <Field label='Description *' placeholder='description' name='description' component={TextField} />
                    <Field label='Specialist *' placeholder='specialist' name='specialist' component={TextField} />
                    <Field label='Discharge Date *' placeholder='yyyy-mm-dd' name='discharge.date' component={TextField}/>
                    <Field label='Discharge Criteria *' id='dischargeCriteria' placeholder='discharge criteria' name='discharge.criteria' component={TextField}/>
                    <DiagnosisSelection
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        diagnoses={Object.values(diagnosis)}
                    />  
                    <Grid>
                        <Grid.Column floated="left" width={5}>
                            <Button type="button" onClick={onCancel} color="red">
                            Cancel
                            </Button>
                        </Grid.Column>
                        <Grid.Column floated="right" width={5}>
                            <Button
                            type="submit"
                            floated="right"
                            color="green"
                            disabled={!dirty || !isValid}
                            >
                            Add
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Form>
            );
            }}
        </Formik>
    );
};

export default HospitalForm