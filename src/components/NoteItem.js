import React from 'react'
import '../css/notes.css'
export default function NoteItem(props) {
    const {title, description, tag,date}= props.note
    console.log(props.note)
  return (
    <div>
        <div className="note-item">
            <div className="noteTitle">
            <h2>{title} </h2>

            </div>
            <p className='tag'>{tag}</p>
            <p className='description'>{description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, facere asperiores pariatur laboriosam animi minima laborum exercitationem, quod maiores cum omnis magnam voluptas adipisci sed ipsa quam saepe necessitatibus velit provident doloremque mollitia! Cum.</p>
            <p className='noteDate'>{date}</p>
        </div>
    </div>
  )
}
