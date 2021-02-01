"use strict";

const movieDB = {
  movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
};

const promo = document.querySelector(".promo");
const ads = promo.querySelectorAll(".promo__adv img");
const genre = promo.querySelector(".promo__genre");
const bg = promo.querySelector(".promo__bg");
const list = promo.querySelector(".promo__interactive-list");
const form = promo.querySelector(".add");
const formInput = form.querySelector(".adding__input");
const formCheckbox = form.querySelector("input[type=checkbox]");
const formButton = form.querySelector("button");
const filmDelete = promo.querySelector(".delete");

ads.forEach((img) => {
  img.remove();
});

genre.textContent = "драма";
bg.style.background = "url(../img/bg.jpg) center center/cover no-repeat";

// Создаем функцию для обработки события "нажатие на кнопку формы"
function handler(event) {
  event.preventDefault();

  let film = formInput.value;
  if (film.length > 21) {
    film = `${film.slice(0, 21)}...`;
  }

  if (formCheckbox.checked) {
    console.log("Добавляем любимый фильм");
  }

  movieDB.movies.push(film);
  createFilmList();
}

// Вешаем обработчик событий на кнопку
formButton.addEventListener("click", handler);

// Функция для создания в разметке списка фильмов из базы данных
function createFilmList() {
  list.innerHTML = "";
  movieDB.movies.sort();

  movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
    </li>
  `;
  });
}

createFilmList();
