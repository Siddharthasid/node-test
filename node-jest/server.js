const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
});

app.get('/works', (req, res) => {
    res.status(200).json({
        data: 'It works!'
    })
});

app.get('/users', (req, res) => {
    res.status(200).json({
        users: [{
            name: 'tukai',
            email: 'tukai@gmail.com',
            password: "123456"
        }]
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;