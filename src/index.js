import loadArticles from './make-article-list.js';
import updateSearchTerm from './search-component.js';
import { queryToObject } from './hash-query.js';
import { makeSearchArticlesURL } from './make-search-api-url.js';
import { updatePaging } from './pagination-component.js';

updateSearchTerm();

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = queryToObject(query);
    console.log(queryOptions);

    const URL = makeSearchArticlesURL(queryOptions);
    // fetch(URL)
    //     .then(response => response.json())
    //     .then(response => {
    //         loadArticles(response.articles);
    //         updatePaging(response.totalResults);
    //     });
});
