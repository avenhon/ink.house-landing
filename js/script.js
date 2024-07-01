"use strict";

let reproductionsList = document.querySelector('.reproductions-country-list');

reproductionsList.addEventListener('click', onReproductionItemClick);

function onReproductionItemClick(e) {
    e.preventDefault();
    let country = e.target;

    if (country.nodeName != 'BUTTON') {
        return;
    };

    let currentReproductionPage = document.querySelector(`#reproductions-products-${country.dataset.country}`);
    let activeCountry = document.querySelector('.reproductions-country-item--active');
    let activeCountryPage = document.querySelector('.reproductions-products--active');
    activeCountry.classList.remove('reproductions-country-item--active');
    activeCountryPage.classList.remove('reproductions-products--active');
    currentReproductionPage.classList.add('reproductions-products--active')

    country.classList.add('reproductions-country-item--active');
}