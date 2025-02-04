import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts';
import JournalEntry from './components/JournalEntry'
import EntryList from './components/EntryList';

function App() {

  // data to watch the entries
  const [entries, setEntry] = useLocalStorage('entries', [])
  const [edit, setEdit] = useState(null)
  const [showForm, setShowForm] = useState(false)
  

  const addEntry = (entry) => { //funtion to edit the entry
    if(edit !== null) {
      const newEntry = [...entries];
      newEntry[edit] = entry;
      setEntry(newEntry)
      setShowForm(true)
      setEdit(null)

    }
    else{
      setEntry((entries) => [...entries, entry]) // adding new entries in an array containing prev entries
    }

  };

  
  

  return (
    <>
      <JournalEntry onAdd={addEntry} edit={edit} entries={entries} showForm={showForm}
      setShowForm={setShowForm}/>
      <EntryList  entries={entries} setEntry={setEntry} edit={edit}
      setEdit={setEdit} setShowForm={setShowForm}/>
    </>
  )
}

export default App
