const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory user data (for demonstration purposes, replace with a real database)
const users = [];

// Registration endpoint
app.post('/signup', (req, res) => {
    const { name, username, email, password } = req.body;

    // Add user to the in-memory data structure (you should use a real database)
    users.push({ name, username, email, password });

    res.json({ message: 'Registration successful. You can now sign in.' });
});

// Sign-in endpoint
app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    // Find the user by username (you should query a real database)
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ message: 'User not found.' });
    }

    // Check the password (you should use a secure password hashing library)
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password.' });
    }

    res.json({ message: 'Sign-in successful.' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
