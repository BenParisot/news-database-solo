const test = QUnit.test;

const article = {
    'source': {
        'id': 'techcrunch',
        'name': 'TechCrunch'
    },
    'author': 'Romain Dillet',
    'title': 'Coinbase users can now withdraw Bitcoin SV following BCH fork',
    'description': 'If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …',
    'url': 'http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/',
    'urlToImage': 'https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711',
    'publishedAt': '2019-02-15T14:53:40Z',
    'content': 'If youre a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin A… [+1514 chars]'
};

function makeArticleList(article) {
    const html = `
    <li>
                <img src="${article.urlToImage}">
                <h2>${article.title}</h2>
                <p>by ${article.author}</p>
                <p>${article.description}</p>
                <p>Read more on <a href="${article.url}">${article.source.name}</a>.</p>
            </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;

}

test('make list of articles from template', assert => {
    
    const expected = `
    <li>
                <img src="https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711">
                <h2>Coinbase users can now withdraw Bitcoin SV following BCH fork</h2>
                <p>by Romain Dillet</p>
                <p>If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …</p>
                <p>Read more on <a href="http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/">TechCrunch</a>.</p>
            </li>`;

    const result = makeArticleList(article);


    assert.htmlEqual(result, expected);
});