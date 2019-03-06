import { articles } from '../article-list.js';
import loadArticles from './make-article-list.js';
import updateSearchTerm from './search-component.js';
import { queryToObject } from './hash-query.js';

loadArticles(articles);
updateSearchTerm();

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = queryToObject(query);
    console.log(queryOptions);
});
