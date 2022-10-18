import request from 'supertest'
import app from '../server.js'

describe('POST /add-task', function(){
    it('should add task', function(done){
        request(app)
            .post('/add-task')
            .send({title: 'test tache TDD'})
            .expect(201, done) // done = propriété de mocha -> permet de savoir si une fonction est retournée plusieurs fois
    })
})

describe('GET /tasks', function(){
    it('should get all tasks', function(done){
        request(app)
            .get('/tasks')
            .expect(200, done) // done = propriété de mocha -> permet de savoir si une fonction est retournée plusieurs fois
            // ? Tu peux rajouter un .then après pour stocker plus de cas (length, ...)
        })
})

describe('GET /task/:id', function(){
    it('should get all tasks', function(done){
        request(app)
            .get('/task/958890a5-fff5-4745')
            .expect(200, done); // done = propriété de mocha -> permet de savoir si une fonction est retournée plusieurs fois
    })
})

describe('PUT /task/:id', function(){
    it('should update a particular task', function(done){
        request(app)
            .put('/task/958890a5-fff5-4745')
            .send({title: "title change"})
            .expect(201, done)
    })
})

describe('DELETE /task/:id', function(){
    it('should delete a particular task', function(done){
        request(app)
            .delete('/task/958890a5-fff5-4745')
            .expect(200, done)
    })
})