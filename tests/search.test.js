Feature('search');

Scenario('find input field', ({ I }) => {
    I.amOnPage('/');
    I.seeElement('#algolia-search-input', 10)
});
