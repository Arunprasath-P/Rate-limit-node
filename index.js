const express = require('express');
const rateLimit = require('express-rate-limit');

// Set up rate limiting
const limiter = rateLimit({
    max: 2, // Limit each IP to 2 requests per windowMs
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'IP Limit Exceeded' // Response message when limit is exceeded
});

let app = express();
app.use(express.json());

// Apply rate limiting to specific routes
app.use('/api/getRecords', limiter);
// app.use('/api/getUsers', limiter);

// Define the routes
app.get("/api/getRecords", (req, res) => {
    res.send("This is the getRecords request");
});

app.get("/api/getUsers", (req, res) => {
    res.send("This is the getUsers request");
});

// Start the server
app.listen(3000, () => {
    console.log('Server has started on port 3000...');
});
