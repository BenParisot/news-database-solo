import { pageToURL } from './hash-query.js';

const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

let currentPage = 1;
let totalPages = 6;

//write function to update page numbers when hashchange event occurs

//total pages needs to equal total results / 20

export function updatePaging(page, totalResults) {
    const currentPage = page;
    const totalPages = Math.ceil(totalResults / 20);
    currentPageNode.textContent = currentPage;
    totalPagesNode.textContent = totalPages;
}

previousButtonNode.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    const currentPage = searchParams.get('page');
    console.log(existingQuery, currentPage);    
});

nextButtonNode.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage++;
    const newURL = pageToURL(existingQuery, currentPage);
    window.location.hash = newURL;
    console.log(existingQuery, currentPage);    

});