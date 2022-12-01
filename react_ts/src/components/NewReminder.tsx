import React, { useState } from 'react'

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

const NewReminder = ({onAddReminder} : NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState<string>("");

  const submitForm = (e : React.FormEvent) => {
     e.preventDefault();
     if(!title) return;
     onAddReminder(title);
     setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
        <label htmlFor="title">Title</label>
        <input type = "text" id = "title" className='form-control w-25 my-1' placeholder='Title'     value={title} onChange = {(e : React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
        <button type = "submit" className='btn btn-primary rounded-pill my-3'>Add</button>
    </form>
  )
}

export default NewReminder