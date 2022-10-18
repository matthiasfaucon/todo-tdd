import request from 'supertest'
import app from './server'

describe('POST /add-task', function(){
    it('should add task', function(done){
        request(app)
            .post('/add-task')
            .send({title: 'test tache TDD'})
            .expect(201, done) // done = propriété de mocha
    })
})