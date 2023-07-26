// Acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.


const btnCode = document.getElementById("btn-code");
const btnDecode = document.getElementById("btn-decode");

import cipher from './cipher.js';

btnCode.addEventListener('click', cipher.encode);
btnDecode.addEventListener('click', cipher.decode);

console.log(cipher);



// let string = JSON.stringify(textToCode);  // método para convertir un objeto en una cadena de texto (string) para poder manipularlo o almacenarlo en algún formato de texto
// console.log (typeof offsetValue); // saber qué tipo de elemento es
// charAt método utilizado en cadenas de texto para obtener el carácter en una posición específica. Devuelve el carácter ubicado en el índice proporcionado como argumento.
// const character = inputValue.charAt(i) ; // separar caracteres
// resultado += String.fromCharCode(unicodeValue); // unir caracteres en texto
// inputValue.split('') // separar caracteres
// const caracter = inputValue.charAt(i); // separar caracteres
// password = String.fromCharCode(resultados)
// return password;
//const character = String.fromCharCode(((unicodeValue - 65 + offsetValue) % 26) + 65); // (("valor ascii" - 65 + offset) / 26 + 65)
//const offsetValue = parseInt(offsetValue); // convertir string a número entero

/*  for (let i = 0; i < inputValue.length; i++) {
      const character = inputValue[i];
      const unicodeValue = inputValue.charCodeAt(i); // convertir a ascii
      const charCode = unicodeValue + offset.value;
      if (charCode >= 65 && charCode <= 90){ // código ASCII de letras mayúsculas
        const character = String.fromCharCode(unicodeValue + offsetValue); 
        password += character;
      }
      else if (charCode > 90 && charCode <= 116){
        const character = String.fromCharCode(((unicodeValue + offsetValue)-90)+64); 
        password += character;
      } */