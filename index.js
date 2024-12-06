const express = require('express');
const path = require('path');
const courseRoute = require('./routes/course/course')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/course', courseRoute)


app.listen(PORT, (req, res) => {
    console.log(`Server listening on localhost:${PORT}`);
});
