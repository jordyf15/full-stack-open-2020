import React from 'react';

const Person=({person,deleteContact})=>{

return(
    <p>{person.name} {person.number} 
    <button onClick={deleteContact} value={person.id}>delete</button></p>
)};

const Persons=({persons,deleteContact})=>{

    return(
        <div>
            <h2>Numbers</h2>
            {persons.map((person)=>{
                // console.log(person.name)
                return <Person key={person.name} person={person} deleteContact={deleteContact}/>
            })}
        </div>
    )
}

export default Persons;