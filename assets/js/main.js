const inputElement = document.querySelector(".inputElement");
const btn = document.querySelector(".btn");
const image = document.querySelector(".image");

let url = "https://img.youtube.com/vi/";

btn.addEventListener("click", downloadimage);

function downloadimage() {
  let videoid = inputElement.value;
  newUrl = `${url}${videoid}/maxresdefault.jpg`;
  image.src = `${newUrl}`;
}