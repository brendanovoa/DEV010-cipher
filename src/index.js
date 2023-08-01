/* eslint-disable no-console */
// Acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.

// Importar las funciones del archivo cipher
import cipher from './cipher.js';

// Tomar los elementos del html por su Id y ponerlos en una variable
const btnCode = document.getElementById("btn-code");
const btnDecode = document.getElementById("btn-decode");

// Llamar a funciones con eventos del DOM
btnCode.addEventListener('click', function(){
  const offset = document.getElementById("offset").value; //convertir objeto en valor
  const inputValue = document.getElementById("textToCode").value;
  const textCoded = document.getElementById("textCoded");
  textCoded.value = cipher.encode(offset, inputValue);
});

btnDecode.addEventListener('click', function(){
  const offset = document.getElementById("offsetDecode").value; 
  const inputValue = document.getElementById("textToDecode").value;
  const textDecoded = document.getElementById("textDecoded"); 
  textDecoded.value =cipher.decode(offset, inputValue);
});

console.log(cipher);


// NOTAS:
// let string = JSON.stringify(textToCode);  // método para convertir un objeto en una cadena de texto (string) para poder manipularlo o almacenarlo en algún formato de texto
// console.log (typeof offsetValue); // saber qué tipo de elemento es
// resultado += String.fromCharCode(unicodeValue); // unir caracteres en texto
// inputValue.split('') // separar caracteres
// const character = inputValue.charAt(i); // separar caracteres método utilizado en cadenas de texto para obtener el carácter en una posición específica. Devuelve el carácter ubicado en el índice proporcionado como argumento