import express from 'express';
import pkg from 'body-parser';
import tasksRoute from './routes/task_routes.js' 

const {json} = pkg
// Instantiate the app
var app = express();


//Parse incoming request data
app.use(json());
// Routes for the API

// Adding a task
app.use('/', tasksRoute)

// API server listing port 3000
app.listen(3000, function () {
  console.log('API running');
});
export default app;