import { searchToURL, pageToURL, queryToObject } from '../src/hash-query.js';
const test = QUnit.test;

test('add search value to empty query in url', assert => {
    const searchValue = 'bitcoin';
    const existingQuery = '';
    const expected = 'searchValue=bitcoin';

    const result = searchToURL(existingQuery, searchValue);

    assert.equal(result, expected);
});

test('add search value to existing query in url', assert => {
    const searchValue = 'elephant';
    const existingQuery = 'searchValue=bitcoin';
    const expected = 'searchValue=elephant';
    const result = searchToURL(existingQuery, searchValue);

    assert.equal(result, expected);
});

test('add page number to existing query in url', assert => {
    const newPage = 2;
    const existingQuery = 'searchValue=bitcoin';
    const expected = 'searchValue=bitcoin&page=2';

    const result = pageToURL(existingQuery, newPage);
    assert.equal(result, expected);
});

test('replace page number in URL with new page', assert => {
    const newPage = 5;
    const existingQuery = 'searchValue=bitcoin&page=2';
    const expected = 'searchValue=bitcoin&page=5';
    const result = pageToURL(existingQuery, newPage);

    assert.equal(result, expected);
});

test('get properites from URL query', assert => {
    const existingQuery = 'searchValue=bitcoin&page=5';
    const expected = {
        searchValue: 'bitcoin',
        page: 5
    };

    const result = queryToObject(existingQuery);

    assert.deepEqual(result, expected);
});

