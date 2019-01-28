/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('Respond with Hello World', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello World', done);
 });
});