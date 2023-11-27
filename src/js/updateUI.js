const cards = document.querySelector(".cards");

export const createCountries = (countries) => {
  cards.innerHTML = "";

  countries.forEach((country) => {
    const { name, region, population, flags } = country;
    //const commonName = country.name.common;
    //const region = country.region;
    //const population = country.population;
    const capital = country.capital ? country.capital[0] : "No capital";
    //const flag = country.flags;
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
      <a href="./about.html?country=/name/${name.common}">
          <img
          src=${flags.svg}
          alt=${flags.alt}
          width="267"
          height="160"
        />
        <div class="cards__item-inner">
          <h3 class="cards__title">${name.common}</h3>
          <p class="population">Population: <span>${population}</span></p>
          <p class="region">Region: <span>${region}</span></p>
          <p class="capital">Capital: <span>${capital}</span></p>
        </div>
      </a>
    `;
    cards.append(li);
  });
};

/// Infomation about selected country
export const createCountryInfo = (country) => {
  const countryInfo = document.querySelector(".country-info");
  const {
    population,
    capital,
    borders,
    region,
    subregion,
    flags,
    name,
    tld,
    languages,
    currencies,
  } = country;
  const nativeName = Object.values(name.nativeName)[0].official;
  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages);
  console.log(country);
  console.log(borders);

  countryInfo.innerHtml = "";
  countryInfo.innerHTML = `
    
        <img src=${flags.svg} alt=${flags.alt} class="country-info__img"/>
        <div class="country-info__content">
          <ul class="country-info__list">
            <li class="country-info__item">
              <p class="name">
                  Native Name: 
                  <span>${nativeName}</span>
              </p>
              <p class="population">
                  Population: 
                  <span>${population}</span>
              </p>
              <p class="region">
                  Region: 
                  <span>${region}</span>
              </p>
              <p class="sub-region">
                  Sub Region: 
                  <span>${subregion}</span>
              </p>
              <p class="capital">
                  Capital: 
                  <span>${capital}</span>
              </p>
            </li>

            <li class="country-info__item">
              <p class="name">
                  Top Level Domain: 
                  <span>${tld}</span>
              </p>
              <p class="population">
                  Currencies: 
                  <span>${currency}</span>
              </p>
              <p class="region">
                  Language: 
                  <span>${language}</span>
              </p> 
            </li>
          </ul>

          <div class="country-info__borders">
            <h3>Border Countries</h3>
            ${
              borders
                ? borders.map((border) => {
                    return `<a href="./about.html?country=/alpha/${border}">${border}</a>`;
                  })
                : "No border countries"
            }
          </div>

        </div>
    
  `;
};
