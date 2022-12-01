import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async() => {
    const response = await reminderService.getReminders();
    setReminders(response);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
    await reminderService.deleteReminder(id);
  };

  const addReminder = async(title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  }

  return (
    <div className="App">
      <NewReminder onAddReminder = {addReminder} />
      <ReminderList items = {reminders} onRemoveReminder = {removeReminder} />
    </div>
  );
}

export default App;
