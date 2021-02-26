export default async function getComic(x) {
  const title = document.querySelector(".comic_title");
  const date = document.querySelector(".comic-time");
  const cover = document.querySelector(".comic_img");
  const alt = document.querySelector(".comic-alt");

  fetch(`http://xkcd.com${x}info.0.json`)
    .then((response) => response.json())
    .then(
      (json) => (
        (title.textContent = json.title),
        (date.textContent = `${json.day}.${json.month}.${json.year}`),
        (cover.src = json.img),
        (alt.textContent = json.alt),
        console.log(json)
      )
    );
}
