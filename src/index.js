import { articles } from '../article-list.js';
import loadArticles from './make-article-list.js';
import updateSearchTerm from './search-component.js';

loadArticles(articles);
updateSearchTerm();
