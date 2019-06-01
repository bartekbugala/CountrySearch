'use strict';
(function () {





    const searchButton = document.getElementById('search');

    const restCountriesUrl = 'https://restcountries.eu/rest/v1/name/';
    let countriesList = document.getElementById('countries');
    

    searchButton.addEventListener('click', searchCountries);

    function searchCountries() {
        let countryName = document.getElementById('country-name').value;
        if (!countryName.length) countryName = 'Poland';

        // CORS fix
       // let prefix = "https://cors-anywhere.herokuapp.com/";

        fetch(/*prefix +*/ restCountriesUrl + countryName)
            .then(function (resp) {
                return resp.json();
            })
            .then(showCountriesList);
    }

    function showCountriesList(resp) {
        countriesList.innerHTML = '';
      }





})();