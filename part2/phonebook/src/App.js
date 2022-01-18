import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0789 123 123', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredContacts, setFilteredContacts] = useState(persons)
  const [searched, setSearched] = useState('');

  const addContact = (event) => {
    event.preventDefault()
    let presence = false
    persons.forEach(element => {
      if(element.name === newName){
        alert(`${newName} is already added to the phonebook`)
        presence = true
      }
    });
    if(!presence){
        const contactObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
        }
        setPersons(persons.concat(contactObject))
        setNewName('')
        setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleContactFilter = (event) => {
    const keyword = event.target.value;
    if(keyword !== ''){
      const results = persons.filter((person)=>{return person.name.toUpperCase().includes(keyword.toUpperCase());
      });
      setFilteredContacts(results);
    }else {
      setFilteredContacts(persons);
    }
    setSearched(keyword);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter contacts: <input value={searched} onChange={handleContactFilter} type="search" placeholder="Filter"/>
      </div>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filteredContacts && filteredContacts.length > 0 ? (filteredContacts.map(
          (person)=>(<p key={person.id}>{person.name} {person.number}</p>))) : (<h1>No results found!</h1>)}
    </div>
  )
}

export default App
