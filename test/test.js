import request from 'supertest'
import app from '../server.js'


describe('GET /tasks', function(){
    it('should get all tasks', function(done){
        request(app)
        .get('/tasks')
        .expect(200, done) // done = propriété de mocha -> permet de savoir si une fonction est retournée plusieurs fois
        // ? Tu peux rajouter un .then après pour stocker plus de cas (length, ...)
    })
})

describe('POST /task/add', function(){
    it('should add task', function(done){
        request(app)
            .post('/task/add')
            .send({title: 'test tache TDD'})
            .expect(201, done) // done = propriété de mocha -> permet de savoir si une fonction est retournée plusieurs fois
    })
})

describe('GET /task/:id', function(){
    it('should get a task', function(){
        request(app)
            .get('/task/958890a5-fff5-4745')
            .expect(200); // done = propriété de mocha -> permet de savoir si une fonction est retournée plusieurs fois
    })
})

describe('PUT /task/update/:id', function(){
    it('should update a particular task', function(){
        request(app)
            .put('task/update/958890a5-fff5-4745')
            .expect(201)
    })
})

describe('DELETE /task/delete/:id', function(){
    it('should delete a particular task', function(){
        request(app)
            .delete('task/delete/958890a5-fff5-4745')
            .expect(200)
    })
})