document.getElementById("calc").addEventListener("submit", (e) => {
  e.preventDefault();
});

const btn = document.getElementsByClassName("calc__btn");
console.log(btn)

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

function evalResult() {
  let resultAll = eval(textArea.value);
  textArea.value = "";
  textArea.value = resultAll;
  if (textArea.value.length > 12) {
    textArea.value = textArea.value.slice(0, 12);
  }
}

result.addEventListener("click", function () {
  evalResult();
});

const clear = document.getElementById("c");

clear.addEventListener("click", () => {
  textArea.value = "";
});

numPad = ["0","1","2","3","4","5","6","7","8","9","/","*","-","+","."];

//con solo "let keyCode = e.key;" ya se captura el teclado. Facil.
addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  } else {
    for (let i = 0; i < numPad.length; i++) {
      if (numPad[i] === e.key) {
        textArea.value += e.key;
        document.getElementById(numPad[i]).classList.add("calc__btn--toggle")
        if (numPad[i] === 'Enter') {
          document.getElementById('=').classList.add("")
        }
      }
    }
    if (e.key == "Enter") {
      evalResult();
      document.getElementById("=").classList.add("calc__btn--toggle")
    }
  }
});

//Quitar Animación de las teclas al preisonar:
addEventListener("keyup", (e) => {
  for (let i = 0; i < numPad.length; i++) {
    if (numPad[i] === e.key) {
      document.getElementById(numPad[i]).classList.remove("calc__btn--toggle");
    }
    if (e.key === 'Enter') {
      document.getElementById("=").classList.remove("calc__btn--toggle");
    }
  }
})

