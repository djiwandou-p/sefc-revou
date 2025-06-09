const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  let errors = [];

  // Server-side validation
  if (!username || username.trim() === '') {
    errors.push('Username is required.');
  }
  if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    errors.push('Invalid email format.');
  }
  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters.');
  }

  if (errors.length > 0) {
    // Respond in JSON format as per requirements
    res.status(400).json({ errors });
  } else {
    // On success, redirect to home page
    res.redirect(`/home?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`);
  }
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
