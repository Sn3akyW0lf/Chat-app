const express = require('express');
const fs = require('fs');

const router = express.Router();


router.get('/', (req, res, next) => {
    fs.readFile('message.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = 'No Chat Exists Yet';
        }
        res.send(`
        <p>${data}</p>
        <form action="/home/" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
            <input type="text" name="msg" placeholder="Enter Message">
            <input type="hidden" id="username" name="username"><br /><br />
            <button type="submit">Send</button>
        </form>`);
    })

});

router.post('/', (req, res, next) => {
    let data = `\n${req.body.username}: ${req.body.msg}`;
    console.log(`${req.body.username}: ${req.body.msg}`);
    fs.writeFile('message.txt', data, {flag: 'a'}, (err) => {
        err ? console.log(err) : res.redirect('/home')
    });
})

module.exports = router;