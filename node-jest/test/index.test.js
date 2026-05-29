const { add, err, promiseTest, arrTest } = require('../index');
const app = require('../server');
const supertest = require('supertest');

describe('Test for add function', () => {
    test('Expected output for add function (toBe)', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Expected output for add function (toEqual)', () => {
        expect(add(1, 2)).toEqual(3);
    });

    test('Expected output for add function (toBeDefined)', () => {
        expect(add(1, 2)).toBeDefined();
    });

    test('not.toBeNull', () => {
        expect(add(1, 2)).not.toBeNull();
    });

    test('toBeGreaterThan', () => {
        expect(add(1, 2)).toBeGreaterThan(1);
    });

    test('toBeLessYhan', () => {
        expect(add(1, 2)).toBeLessThan(4);
    });

    test('toMatch', () => {
        expect(add('Hello', 'World')).toMatch(/World/);
    });
});


describe('Test for err function', () => {
    test('toThrow', () => {
        expect(() => err()).toThrow('I am a new error');
    });
});


describe('Test for promiseTest function', () => {
    test('promiseTest', () => {
        promiseTest(1, 2).then((res) => {
            expect(res).toBe("+ve");
        }).catch((err) => {
            expect(err).toBe("-ve");
        })
    });

    test('promiseTest resolves', () => {
        expect(promiseTest(5, 2)).resolves.toBe("+ve");
    });

    test('promiseTest rejects', () => {
        expect(promiseTest(1, 2)).rejects.toBe("-ve");
    });
});


test("array test toContain", () => {
    expect(arrTest()).toContain('bat');
});

describe('Test for server APIs', () => {
    test('Test for /works', async () => {
        const res = await supertest(app).get('/works');
        expect(res.status).toBe(200);
        expect(res.body.data).toBe('It works!');
    })

    test('Test GET default API', async () => {
        await supertest(app)
            .get('/')
            .expect(200)
            .then(result => {
                expect(result && result.body && typeof result.body === 'object' && result.body.message === 'Hello World');
            })
    });
    test('Test GET users API', async () => {
        await supertest(app)
            .get('/users')
            .expect(200)
            .then(result => {
                expect(result && result.body && typeof result.body === 'object');
            });
    });
});
