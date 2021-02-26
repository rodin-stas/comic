import getComic from "./GetComic.js";
import changeBtn from "./changeBtn.js";
import "../style/main.css";

// Меняем адресс

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

// Нстройка путей
const router = async () => {
  if (+location.pathname.replace(/\D+/g, "") != 0) {
    getComic(`/${location.pathname.replace(/\D+/g, "")}/`);
  } else {
    getComic(`/`);
  }

  const routes = [
    // { path: "/", view: () => console.log("Стартовая") }, // Можно убрать
    { path: `/${+location.pathname.replace(/\D+/g, "")}/` },
  ];

  // Проверка путей на совпадение
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
      //  result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatches) => potentialMatches.isMatch
  );

  // Если нет пути то рендеоить будем стартовую
  if (!match) {
    match = {
      ruote: routes[0],
      isMatch: true,
    };
  }

  console.log(match);
  console.log(potentialMatches);
  changeBtn();
};
// Обрабатываем перемещение по истории
window.addEventListener("popstate", router);
// Обрабатываем кнопки
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
      changeBtn();
    }
  });

  router();
});
