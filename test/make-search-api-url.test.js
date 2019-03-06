const test = QUnit.test;

const SEARCH_ARTICLE_URL = 'https://newsapi.org/v2/everything?';
const API_KEY = '48464c7f112d4fc4a5047ae304c56c1d';

function makeSearchArticlesURL(queryOptions) {
    const url = new URL(SEARCH_ARTICLE_URL);
    url.searchParams.set('q', queryOptions.q);
    url.searchParams.set('apiKey', API_KEY);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('language', 'en');
    return url.toString();
}

test('includes searchTerm and page in search movie url', assert => {
    //arange
    const queryOptions = {
        q: 'bitcoin',
        page: 2
    };

    const expected = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=48464c7f112d4fc4a5047ae304c56c1d&page=2&language=en';
    //act
    const result = makeSearchArticlesURL(queryOptions);
    //assert
    assert.equal(result, expected);
});