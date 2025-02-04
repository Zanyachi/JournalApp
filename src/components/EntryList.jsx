/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import Button from './Button.jsx'
import JournalCard from './JournalCard.jsx';



function EntryList({ entries, setEntry, setEdit, setShowForm }){  

  // const [visible, setVisible] = useState(false)
  const pen = <FontAwesomeIcon icon={faPenToSquare}/>
  const remove = <FontAwesomeIcon icon={faTrash}/>
  const plus = <FontAwesomeIcon icon={faPen} />
 
  
    const handleEdit = (id) => {
      setEdit(id)
      
    }

    const handleDelete = (id) => {
        const newEntry = [...entries];
        newEntry.splice(id, 1)
        setEntry(newEntry)
    }
    
    return(
        <>
            <div className='container' >
                <div className="header">
                <h2>Entries</h2>
                <Button onClick={() => setShowForm(true)} label={plus} 
                color="blue" border="50px" padding="15px"></Button>
                </div>
                <div className="list-container">
                    {
                        entries.map(
                            (entry, index) => {
                              return(
                              <div key={index} className="list">
                                <JournalCard title={entry.title} content={entry.content} date={entry.date}/>
                                <div className="list-btn-cont">
                                    <Button label={pen} onClick={() => {handleEdit(index); setShowForm(true)}}
                                      color="azure" padding="9px"/>
                                    <Button label={remove} onClick={() => handleDelete(index)} color="red" padding="9px"/>
                                </div>
                              </div>
                              )
                            }
                          )
                    }
                </div>
            </div>
        </>
    )
}

export default EntryList