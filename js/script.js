"use strict";

// Добавляем слушателя, который проверяет построено ли DOM дерево и если да
// -выполняет весь код скрипта
document.addEventListener("DOMContentLoaded", () => {
  // Объект-база данных с фильмами
  const movieDB = {
    movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
  };

  // Основые переменные-элементы, с котрыми работаем на странице
  const promo = document.querySelector(".promo"),
    adv = promo.querySelectorAll(".promo__adv img"),
    genre = promo.querySelector(".promo__genre"),
    bg = promo.querySelector(".promo__bg"),
    movieList = promo.querySelector(".promo__interactive-list"),
    addForm = promo.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector("input[type=checkbox]");

  // Функция для очистки рекламы с правого блока
  const deleteAdv = (arr) => {
    arr.forEach((img) => {
      img.remove();
    });
  };

  // Функция для мелких изменений на странице
  const makeChanges = () => {
    genre.textContent = "драма";
    bg.style.background = "url(../img/bg.jpg) center center/cover no-repeat";
  };

  // Функция для сортировки массива по алфавиту(будет добавляться функционал)
  const sortArr = (arr) => {
    arr.sort();
  };

  // Создаем функцию для обработки события "нажатие на кнопку формы"
  function handler(event) {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.slice(0, 21)}...`;
      }

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);

      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  }

  // Вешаем обработчик событий на событие "отправка формы"
  addForm.addEventListener("submit", handler);

  // Функция для создания в разметке списка фильмов из базы данных
  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((newFilm, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${newFilm}
        <div class="delete"></div>
      </li>
    `;
    });

    // Слушатель для удаления фильмов по нажатию на корзинку
    // для раждого элемента delete при нажатии удаляем элемент-родитель(т.е li с фильмом)
    // Методом spliсе удаляем элемент из объекта-базы данных в скрипте
    // потом пересобираем базу данных с сортировкой внутри
    promo.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        films.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
