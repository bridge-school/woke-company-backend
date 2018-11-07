// TODO: add tests

const request = require("supertest");
const express = require('express');
const app = express();

describe('GET /keywords', () => {
	it('respond with json', done => {
		request(app)
			.get('/keywords')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});
});

// describe('GET /keywords/technical', () => {
// 	it('respond with json', done => {
// 		request(app)
// 			.get('/keywords/technical')
// 			.set('Accept', 'application/json')
// 			.expect('Content-Type', /json/)
// 			.expect(200, done);
// 	});
// });