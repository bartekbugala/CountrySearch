"use strict";
(function() {
  const searchButton = document.getElementById("search");
  const restCountriesUrl = "https://restcountries.eu/rest/v2/name/";

  let countriesList = document.getElementById("countries");

  searchButton.addEventListener("click", searchCountries);

  document.getElementById("country-name").addEventListener("keydown", function(event) {
    // searchCountries(); - automatyczne szukanie po wpisaniu frazy
    // Code 13 = Enter
    
    if (event.keyCode === 13) {
      event.preventDefault();
      //searchButton.click(); // Symulowanie kliknięcia
      searchCountries();
    }

  });

  function searchCountries() {
    let countryName = document.getElementById("country-name").value;
    if (!countryName.length) countryName = "Poland";

    fetch(restCountriesUrl + countryName)
      .then(function(resp) {
        return resp.json();
      })
      .then(showCountriesList);
  }

  function showCountriesList(resp) {
    countriesList.innerHTML = "";
    resp.forEach(function(item) {
      let liEl = document.createElement("li");
      liEl.classList.add("row");
      liEl.innerHTML = `<span class="col-6">${item.name}</span>`;
      liEl.innerHTML += `<span class="col-6"><img class="country-flag"src="${item.flag}" alt="flag"></span>`;
      countriesList.appendChild(liEl);
    });
  }
})();
