const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/anon/login" method="POST">
    <input type="text" id="username" name="username" placeholder="Enter Username"><br /><br />
    <button type="submit">Login</button>
    </form>`);
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/home');
});

module.exports = router;