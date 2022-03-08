//import estils from "../models/estils.js";
//let editarEstils = new estils();

//Detectem la part del texte seleccionat
function getSelectionText() {
  // variable on emmagatem el text seleccionat
  var text = "";
  if (window.getSelection) {
    // Si s'ha fet una seleccio li fiquem el texte dins la variable
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  // Return ens tornarà el troç de texte seleccionat
  return text;
}

// què farà cada botó
const bold = document.querySelector("#bold");
const text = document.querySelector("#text");
const sub = document.querySelector("#sub");
const cursiva = document.querySelector("#cursiva");
const color = document.querySelector("#color");
const clean = document.querySelector("#clean");

bold.addEventListener("click", () => {
  // Assignem una variable al troç de texte seleccionat

  const trozoDeTexto = getSelectionText();

  // La funció replace modifica un troç de texte - primer valor per un segon valor
  text.innerHTML = text.innerHTML.replace(
    trozoDeTexto,
    `<span style="font-weight: bold">${trozoDeTexto}</span>`
  );
  console.log("bold s'està executant");
});

sub.addEventListener("click", () => {
  const trozoDeTexto = getSelectionText();
  text.innerHTML = text.innerHTML.replace(
    trozoDeTexto,
    `<span style="text-decoration-line:underline; text-decoration-color:darkolivegreen">${trozoDeTexto}</span>`
  );
  console.log("sub s'està executant");
});

cursiva.addEventListener("click", () => {
  const trozoDeTexto = getSelectionText();
  text.innerHTML = text.innerHTML.replace(
    trozoDeTexto,
    `<span style="font-style: Italic">${trozoDeTexto}</span>`
  );
  console.log("cursiva s'està executant");
});

color.addEventListener("click", () => {
  const trozoDeTexto = getSelectionText();
  text.innerHTML = text.innerHTML.replace(
    trozoDeTexto,
    `<span style="background-color:darkorange">${trozoDeTexto}</span>`
  );
  console.log("color s'està executant");
});

clean.addEventListener("click", () => {
  const trozoDeTexto = getSelectionText();
  text.innerHTML = text.innerHTML.replace(
    trozoDeTexto,
    `<span style="font-style:normal; background-color:white; font-weight:normal; text-decoration-line:underline; text-decoration-color:white">${trozoDeTexto}</span>`
  );
  console.log("clean s'està executant");
});
