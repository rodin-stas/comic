export default function changeBtn() {
  // Тут нодо проверить на 0 адресс
  const btn = document.querySelectorAll("[data-link]");
  let btnIndex = +location.pathname.replace(/\D+/g, "");
  console.log(btn);
  if (btnIndex >= 0) {
    btn[1].href = `/${+location.pathname.replace(/\D+/g, "") + 1}/`;
    btn[2].href = `/${Math.floor(Math.random() * (2429 - 1 + 1)) + 1}/`;
    btn[3].href = `/${+location.pathname.replace(/\D+/g, "") - 1}/`;
    console.log(btn);
  } else {
    btn[1].href = "";
    btn[2].href = `/${Math.floor(Math.random() * (2429 - 1 + 1)) + 1}/`;
    btn[3].href = `/${+location.pathname.replace(/\D+/g, "")}/`;
  }
}
