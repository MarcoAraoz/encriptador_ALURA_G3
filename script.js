const inputText = document.querySelector(".input_text");
const message = document.querySelector(".message");

//La letra "e" es convertida en "enter"
//La letra "i" es convertida en "imes"
//La letra "a" es convertida en "ai"
//La letra "o" es convertida en "ober"
//La letra "u" es convertida en "ufat"

function btnEncriptar() {
  const encriptedText = encript(inputText.value);
  message.value = encriptedText;
  message.style.backgroundImage = "none";
  inputText.value = "";
}

function btnDesencriptar() {
  const desencriptedText = desencript(inputText.value);
  message.value = desencriptedText;
  message.style.backgroundImage = "none";
  inputText.value = "";
}

function encript(encriptString) {
  const matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encriptString = encriptString.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (encriptString.includes(matrizCode[i][0])) {
      encriptString = encriptString.replaceAll(
        matrizCode[i][0],
        matrizCode[i][1]
      );
    }
  }
  return encriptString;
}

function desencript(desencriptString) {
  const matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  desencriptString = desencriptString.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (desencriptString.includes(matrizCode[i][1])) {
      desencriptString = desencriptString.replaceAll(
        matrizCode[i][1],
        matrizCode[i][0]
      );
    }
  }
  return desencriptString;
}

function btnCopy() {
    message.select()
    navigator.clipboard.writeText(message.value)
}
