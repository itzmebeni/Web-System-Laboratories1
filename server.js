require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');



// Express app
const app = express();

app.use(cors());

// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve static files from the 'frontend' folder 


// Serve workout.html when accessing the /workout route
app.get('/workout', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'workouts.html'));  
});

// Handle the root route ('/') and serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'workouts.html'));  
});

// Log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes for API
app.use('/api/workouts', workoutRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });