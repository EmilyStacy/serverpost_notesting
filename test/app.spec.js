//can be found in setup.js
// const {expect} = require('chai');
// const supertest = require('supertest');
const app = require('../src/app');

describe('App', ()=> {
    it('GET/respond with 200 containing "Hello World!', ()=> {
        return supertest(app)
                .get('/')
                .expect(200, 'Hello, boilerplate!')
    })
})