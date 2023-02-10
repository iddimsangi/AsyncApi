"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const coutryFuc = (countryData, classNameValue = "") => {
  const html = ` <article class="country ${classNameValue}">
    <img class="country__img" src="${countryData.flags.png}" />
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
      coutryFuc(data[0]);
      const neibor = data[0].borders[0];
      console.log(neibor);
      if (!neibor) return;
      fetch(`https://restcountries.com/v3.1/alpha/${neibor}`)
        .then((resp) => {
          resp.json();
          console.log(resp);
        })
        // .then((data) => {
        //   console.log(data);
        // //   coutryFuc(data, "neighbour");
        // });
    });
};
fetchCountryRender("portugal");
