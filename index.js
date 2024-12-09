const express = require('express');
const path = require('path');
const courseRoute = require('./routes/course/course');
const studentRoute = require('./routes/student/student');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Use course instead of class because I have some trouble when defined class variable
app.use('/class', courseRoute);
app.use('/student', studentRoute);

app.listen(PORT, (req, res) => {
    console.log(`Server listening on localhost:${PORT}`);
});
