import React from 'react'
import Reminder from '../models/reminder'

interface Reminders {
    items: Reminder[],
    onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: Reminders) => {
  return (
    <ul className='list-group'>
        {items.map(item => <li className = "list-group-item" key = {item.id}>
        {item.title}
        <button onClick={() => onRemoveReminder(item.id)} className="btn btn-outline-danger rounded-pill mx-2">Delete</button>
        </li>)}
    </ul>
  )
}

export default ReminderList