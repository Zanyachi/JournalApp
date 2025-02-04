/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClose, faAdd  } from '@fortawesome/free-solid-svg-icons';
import Button from './Button.jsx'



function JournalEntry({onAdd, edit, entries, showForm, setShowForm}){

    const [title, setTitle] = useState("") // data watching the title of the journal
    const [content, setContent] = useState("") // data watching the content of the journal
    const [isShown, setIsShown] = useState(false)
    const done = <FontAwesomeIcon icon={faEdit}/>
    const add = <FontAwesomeIcon icon={faAdd}/>
    const close = <FontAwesomeIcon icon={faClose}/>
    
    // This useEffect handles the edit function of the journal
    useEffect(()=> {
        if(edit !== null){
            const editing = entries[edit];
            console.log('Editing:', editing)
            setTitle(editing.title)
            setContent(editing.content)
        }
    }, [entries, edit])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !content) return;
        setShowForm(false)
        onAdd({ title, content });
        setTitle('');
        setContent('')
    }


    return(
        <>
            {
                showForm && 
            <form onSubmit={handleSubmit} onMouseEnter = {() => setIsShown(true)}
            onMouseLeave = {() => setIsShown(false)} >

                {/* Title input */}
                <input type="text" 
                name="title"  
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
                autoComplete="off"
                autoFocus/>
                
                {/* Content input */}
                <textarea type="textarea" 
                name="content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)}  
                placeholder="What's on your mind?">
                </textarea>
               {
                isShown && 
                <div className="form-btn-cont">

                {/* button that submits the content */}
                <Button type="submit" label={ edit !== null ? done : add} 
                />

                {/* button that closes the form */}
                <Button label={close} onClick={() => {
                    setShowForm(false);
                    setTitle('');
                    setContent('')
                }} 
                    />
               </div>
               }
            </form>
            }
        </>
    )
}

export default JournalEntry