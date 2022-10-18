import {LowSync, JSONFileSync} from 'lowdb';
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import { v4 as uuidv4 } from 'uuid';
import lodash from 'lodash'

const __dirname = dirname('../db');
const file = join(__dirname, 'db.json')
// Create a db.json file and load the lowdb adapter to allow read/write functionality on the db file(A new db.json file will be created for you when you run this file)
const db = new LowSync(new JSONFileSync(file));
db.read();
// Set the default structure for the db file
db.data ||= {tasks: []}; // ! nouvelle syntaxe de la ternaire

// ? Listing all tasks
export function getAllTasks(req, res){
    return res.json(db.read('tasks'));
}

// ? Add a task
export function addTask(req, res){
    const title = req.body.title;
    // Generate a new random ID
    var id = uuidv4();
    // Reject any requests without the body
    if (!title || title === undefined) {
      res.status(400).end()
    }
    else {
      // Add the new entry along an id to the db file
      db.write({tasks: {id, title} });
      return res.status(201).end();
    }
}

// ? Listing a task
export function getTask(req, res){
    const id = req.params.id;
    // Capture the id from the request and first check if it exists in the db
    db.chain = lodash.chain(db.data);
    const task = db.chain
    .get('tasks')
    .find({'id': id})
    .value()
    if (task) {
        return res.json(task);
    }
    else{
        return res.status(404).end()
    }
}

// ? Update a task
export function updateTask(req, res){
    var update = req.body.title;
    // Reject any requests without a body
    if (!update || update === undefined) {
        res.status(400).end()
    }
    else {
        // Find the item in the db with that id and write the update to it
        db.chain = lodash.chain(db.data)
            .get('tasks')
            .find({ id: req.params.id })
            .assign({ title: update })
            .value()
            return res.status(201).end();
    }
}


// ? Delete a task
export function deleteTask(req, res){
    db.chain = lodash.chain(db.data)
      .get('tasks')
      .remove({ id: req.params.id })
    return res.status(200).end();
}
