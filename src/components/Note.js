import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return (
       <div className="note">
           <span>This is your first note!</span>
           <div className="note-footer">
               <small>06/22/2021</small>
               <MdDeleteForever className="delete-icon" size="1.3em" />
           </div>
       </div>
    )
}

export default Note
