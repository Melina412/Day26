// * 1. element auswählen und in konstante speichern
const gallery = document.getElementById("gallery");

// * 2. weitere konstante erstellen und figure tags darin speichern
const figureTag = "<figure></figure>";

// * 3. figure tags über konstante mehrfach in element einfügen
// entweder einzeln:
// gallery.innerHTML += figureTag + figureTag + figureTag;
// oder mit loop:
for (let i = 0; i < 3; i++) {
  gallery.innerHTML += figureTag;
}

// * 4. gallery-items innerhalb der figure tags erstellen und stylen
const item = document.querySelectorAll("figure");
// selector um alle figure elemente anzusprechen

item.forEach((figure, index) => {
  const itemNumber = index + 1;
  figure.innerHTML += `<div></div><p>Fig. ${itemNumber}</p>`;
});
// loop um alle elemente anzusprechen und aufsteigende indices einzufügen
// `` zurückticks statt "" weil ${...} sonst nicht als js-ausdruck interpretiert wird

gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(3, 1fr)";

const image = document.querySelectorAll("div");

image.forEach((div) => {
  const url = "url('https://picsum.photos/200')";
  div.style.backgroundImage = url;
  div.style.height = "200px";
  div.style.width = "200px";
});
