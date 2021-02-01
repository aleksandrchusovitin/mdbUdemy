/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
};

const promo = document.querySelector(".promo");
const ads = promo.querySelectorAll(".promo__adv img");
const genre = promo.querySelector(".promo__genre");
const bg = promo.querySelector(".promo__bg");
const list = promo.querySelector(".promo__interactive-list");

ads.forEach((img) => {
  img.remove();
});
genre.textContent = "драма";
bg.style.background = "url('../img/bg.jpg') center center/cover no-repeat";

list.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  list.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
    </li>
  `;
});
