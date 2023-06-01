document.getElementById("calc").addEventListener("submit", (e) => {
  e.preventDefault();
});

const btn = document.getElementsByClassName("calc__btn");

const textArea = document.getElementById("textArea");

//e.target se refiere al objeto principal del evento (este caso el boton apretado que desencadenó el evento)
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    parseInt((textArea.value += e.target.textContent));
    if (textArea.value.length > 12) {
      textArea.value = textArea.value.slice(0, 12);
    }
  });
}

const result = document.getElementById("=");

result.addEventListener("click", function () {
  let resultAll = eval(textArea.value);
  textArea.value = "";
  textArea.value = resultAll;
  if (textArea.value.length > 12) {
    textArea.value = textArea.value.slice(0, 12);
  }
});

const clear = document.getElementById("c");

clear.addEventListener("click", () => {
  textArea.value = "";
});


