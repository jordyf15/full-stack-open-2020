import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import HealthCheckForm from './HealthCheckForm';
import HospitalForm  from './HospitalForm';
import OccupationalForm from './OccupationalForm';
import {NewEntry,EntryType} from '../types';

interface Props {
    EntryType: EntryType
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: NewEntry) => void;
  error?: string;
}

const renderForm=(EntryType: EntryType,onSubmit:(values:NewEntry)=>void,onCancel:()=>void)=>{
    switch(EntryType){
        case 'OccupationalHealthcare':
            return <OccupationalForm onSubmit={onSubmit} onCancel={onCancel}/>;
        case 'Hospital':
            return <HospitalForm onSubmit={onSubmit} onCancel={onCancel}/>;
        case 'HealthCheck':
            return <HealthCheckForm onSubmit={onSubmit} onCancel={onCancel}/>;
        default:
            return null;
    }
}

const AddEntryModal=({EntryType,modalOpen, onClose, onSubmit, error }: Props)=>(
    <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
        <Modal.Header>Add a new entry</Modal.Header>
        <Modal.Content>
            {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
            {renderForm(EntryType,onSubmit,onClose)}
        </Modal.Content>
    </Modal>
)

export default AddEntryModal;