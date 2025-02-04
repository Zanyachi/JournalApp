/* eslint-disable react/prop-types */
import { useState } from 'react'

function JournalCard({content, title}){
    const  [expand, setExpand] = useState(false) 
    return(
        <div onClick={() => setExpand(!expand)}>
            <h3>{title}</h3>
            {expand && <p>{content}</p>}
        </div>
    )
}

export default JournalCard