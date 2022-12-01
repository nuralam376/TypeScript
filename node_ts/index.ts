import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();
const PORT = 7000;

app.use(express.json());
app.use("/reminders", remindersRouter);

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));