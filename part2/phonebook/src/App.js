import React,{useState} from 'react';
import Persons from './components/Persons.js';
import Filter from './components/Filter.js';
import ContactForm from './components/ContactForm.js';
import contactServices from './services/contact.js';
import Notification from './components/Notification.js';

const App=()=>{
  const [persons,setPersons]=React.useState([]);
  const [newName, setNewName]=React.useState('');
  const [newNumber,setNewNumber]=React.useState('');
  const [filter,setFilter]=React.useState('');
  const [showPersons,setShowPersons]=React.useState(persons);
  const [notifMessage,setNotifMessage]=useState(null);
  const [colorNotif,setColorNotif]=useState(true);

  const submitNewPerson=(event)=>{
    let exist=false;
    event.preventDefault();
    const newPerson={
      name: newName,
      number: newNumber
    }
    console.log(persons)
    persons.forEach((person)=>{
      if(person.name===newPerson.name){
        exist=true;
      }
    })
    if(exist===true){
      console.log(persons)
      let updateContact=persons.filter((person)=>{
        return person.name.toLowerCase()===newPerson.name.toLowerCase();
      })//suspected for changing the persons state because its a reference?
      updateContact=updateContact[0];
      if(window.confirm(`${updateContact.name} is already added to phonebook, replace the old number with
      the new one?`)){
        console.log(persons)
        updateContact.number=newPerson.number;
        contactServices.update(updateContact)
        .then((updatedPerson)=>{
          console.log(persons)
          console.log(updatedPerson)
          if(updatedPerson.name){
            console.log('valid')
        setPersons(persons.map((person)=>person.id===updatedPerson.id?updatedPerson:person))
          setColorNotif(true);
        setNotifMessage(`changed ${updatedPerson.name}`)
        setTimeout(() => {
          setNotifMessage(null);
        }, 5000);
        }else{
          console.log('not valid');
          console.log(persons)
          setColorNotif(false);
          setNotifMessage(updatedPerson);
          setTimeout(() => {
            setNotifMessage(null);
          }, 5000);
        }
      })
      .catch(()=>{
        setColorNotif(false);
        setNotifMessage(`Information of ${updateContact.name} has already been removed from server`);
      })
      }
    }else{
      contactServices.create(newPerson)
      .then((addedPerson)=>{
        if(addedPerson.name){
        console.log('masuk ke then')
        setPersons(persons.concat(addedPerson));
        setNewName('');
        setNewNumber('');
        setColorNotif(true);
        setNotifMessage(`added ${addedPerson.name}`)
        setTimeout(() => {
          setNotifMessage(null);
        }, 5000);
      }else{
        throw addedPerson
      }
      })
      .catch((err)=>{
        console.log('masuk errornya',err);
        setNewName('');
        setNewNumber('');
        setColorNotif(false);
        setNotifMessage(err);
        setTimeout(() => {
          setNotifMessage(null);
        }, 5000);
      })
    }
  }

  const deleteContact=(event)=>{
    console.log(event.target.value)
    console.log(persons);
    const deletedPerson=persons.filter((person)=>person.id===event.target.value)[0].name;
    if(window.confirm(`Delete ${deletedPerson}`)){
      contactServices.del(event.target.value)
      .then(()=>{
        setPersons(persons.filter((person)=>{
          return person.id!==event.target.value;
        }))
      })
    }
  }

  const changeInputNumber=(event)=>{
    setNewNumber(event.target.value)
  }

  const changeInputName=(event)=>{
    setNewName(event.target.value)
  }

  const changeInputFilter=(event)=>{
    setFilter(event.target.value);
  }

  React.useEffect(()=>{
    console.log(persons)
    setShowPersons(persons.filter((person)=>{
      return person.name.toLowerCase().includes(filter.toLowerCase())}));
  },[filter,persons])

  React.useEffect(()=>{
    contactServices.getAll()
    .then((initialPersons)=>{
      setPersons(initialPersons);
    })
  },[])

  return (
    <div>
      
      <h2>Phonebook</h2>
      <Notification message={notifMessage} colorNotif={colorNotif}/>
      <Filter changeHandler={changeInputFilter} filterValue={filter}/>
      
      <h2>Add a new Contact</h2>
      <ContactForm submitHandler={submitNewPerson} changeInputName={changeInputName} changeInputNumber={changeInputNumber}
      name={newName} number={newNumber}/>

      <Persons persons={showPersons} deleteContact={deleteContact}/>
    </div>
  )


}

export default App;
