import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";
import {NewHealthCheck} from '../types';
import {useStateValue} from '../state/state';
import {TextField,NumberField} from '../AddPatientModal/FormField';
import {DiagnosisSelection} from '../AddPatientModal/FormField';



interface Props{
    onSubmit:(values: NewHealthCheck)=>void;
    onCancel:()=>void;
}

const HealthCheckForm:React.FC<Props>=({onSubmit,onCancel})=>{
    const [{ diagnosis }] = useStateValue();
    return(
        <Formik
        initialValues={{
            date: '',
            description:'',
            type:'HealthCheck',
            specialist:'',
            diagnosisCodes:[],
            healthCheckRating:0
        }}
        onSubmit={onSubmit}
        validate={values=>{
            const requiredError='Field is required!';
            const errors:{[field: string]:string}={};
            if(!values.date){
                errors.date=requiredError
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
                    <Field
                        label="healthCheckRating *"
                        name="healthCheckRating"
                        component={NumberField}
                        min={0}
                        max={3}
                    />
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

export default HealthCheckForm