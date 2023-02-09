"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const coutryFuc = (countryData) => {
  const html = ` <article class="country">
    <img class="country__img" src="${countryData.flag}" />
    <div class="country__data">
      <h3 class="country__name">${countryData.name.common}</h3>
      <h4 class="country__region">${countryData.region}</h4>
      <p class="country__row"><span>👫</span>${(
        countryData.population / 10000
      ).toFixed(2)}</p>
      <p class="country__row"><span>🗣️</span>${countryData.languages.por}</p>
      <p class="country__row"><span>💰</span>${
        countryData.currencies.EUR.name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const fetchCountryRender = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].name.common);
      console.log(data[0].currencies.EUR.name);
      coutryFuc(data[0]);
    });
};
fetchCountryRender("portugal");
