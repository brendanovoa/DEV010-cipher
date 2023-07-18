const cipher = {
  // ...
};

const textToCode = document.getElementById("textToCode")
const textToDecode = document.getElementById("textToDecode")
const offest = document.getElementById("offest")
const offsetDecode = document.getElementById("offestDecode")
const btnCode = document.getElementById("code")
const btnDecode = document.getElementById("decode")
const resultado = document.getElementById("resultado")

btnCode.addEventListener('click', cipher)

function cipher(){
  let inputValue = textToCode.value;
  let offsetValue = offset.value;

  let resultado = ;
  
  // (("valor ascii" - 65 + offset) / 26 + 65)
  // Texto.charCodeAt(0);
  // String.fromCharCode(76);

    window.alert("resultado");
}

export default cipher;