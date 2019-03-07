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