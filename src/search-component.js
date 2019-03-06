import { searchToURL } from './hash-query.js';

const searchFormNode = document.getElementById('search-form');

export default function updateSearchTerm() {
    searchFormNode.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(searchFormNode);
        const q = formData.get('search-value');
        const existingQuery = window.location.hash.slice(1);
        const newQuery = searchToURL(existingQuery, q);
        window.location.hash = newQuery;
    });
}
