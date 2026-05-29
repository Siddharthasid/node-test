const app = require('../index');
const request = require('supertest');

describe('GET / ', () => {
    test('should return hello world', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello World!');
    });
});

describe('GET /users ', () => {
    test('should return list of users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body && res.body === 'object');
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'John Doe'
            },
            {
                id: 2,
                name: 'Jane Doe'
            }
        ]);
    });
});