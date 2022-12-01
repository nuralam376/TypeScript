import { Router } from "express";
import createReminder from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req,res) => {
    return res.json(reminders);
});

router.post("/", (req,res) => {
    const {title} = req.body as createReminder;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    return res.status(201).json(reminder);
});

export default router;