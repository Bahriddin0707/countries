const searchElement = document.querySelector(".search");
const cards = document.querySelector(".cards");

searchElement.search.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const cardsItems = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");

  cardsTitles.forEach((title, index) => {
    if (title.textContent.toLocaleLowerCase().includes(searchValue)) {
      cardsItems[index].style.display = "block";
    } else {
      cardsItems[index].style.display = "none ";
    }
  });
});

// Serching by region
const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelecSpan = document.querySelector(".search__select span");
import request from "./request";
import { createCountries } from "./updateUI";

searchSelect.forEach((li) => {
  li.addEventListener("click", (e) => {
    //searchElement.search.value = "";
    searchSelecSpan.textContent = li.textContent;
    let filteredAPI;

    if (li.textContent === "All") {
      filteredAPI = "https://restcountries.com/v3.1/all";
    } else {
      filteredAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }

    request(filteredAPI)
      .then((data) => {
        createCountries(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  });
});
