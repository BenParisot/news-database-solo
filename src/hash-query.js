export function searchToURL(existingQuery, searchValue) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchValue', searchValue);
    return searchParams.toString();
}

export function pageToURL(existingQuery, newPage) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', newPage);
    return searchParams.toString();

}

export function queryToObject(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const searchValue = searchParams.get('searchValue');
    const page = parseInt(searchParams.get('page'));
    return {
        searchValue: searchValue,
        page: page
    };
}