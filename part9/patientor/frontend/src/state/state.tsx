import React, { createContext, useContext, useReducer } from "react";
import { Patient,Diagnosis } from "../types";

import { Action } from "./reducer";

export type State = {
  patients: { [id: string]: Patient };
  patientsInfo: {[id:string]: Patient};
  diagnosis:{[code: string]:Diagnosis};
};

const initialState: State = {
  patients: {},
  patientsInfo:{},
  diagnosis:{}
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);

export const setPatientList =(payload:Patient[])=>{
  return{
    type:'SET_PATIENT_LIST',
    payload
  } as Action
}

export const setDiagnosisList=(payload:Diagnosis[])=>{
  return{
    type:'SET_DIAGNOSIS_LIST',
    payload
  } as Action
}

export const addPatient=(payload:Patient)=>{
  return{
    type:'ADD_PATIENT',
    payload
  } as Action
}

export const getPatientInfo=(payload:Patient)=>{
  return{
    type: 'GET_PATIENT_INFO',
    payload
  } as Action
}

export const addPatientEntry=(payload:Patient)=>{
  return{
    type: 'ADD_ENTRY',
    payload
  }as Action
}