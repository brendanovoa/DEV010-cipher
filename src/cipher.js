/* 
Implementar el objeto cipher que contiene 2 métodos o funciones:
cipher.encode(offset, string)
cipher.decode(offset, string)
*/

const textToCode = document.getElementById("textToCode");
const textToDecode = document.getElementById("textToDecode");
const offsetCode = document.getElementById("offset");
const offsetDecode = document.getElementById("offestDecode");

const textCoded = document.getElementById("textCoded");
const textDecoded = document.getElementById("textDecoded");

const cipher = {
  encode: function () { // parámetros (offset,string)
    const offsetValue = offsetCode.value; //convertir objeto en valor
    const inputValue = textToCode.value;
    console.log (offsetValue,inputValue); //verificar lo que captura
    
    let password = ""; // regresar valor vacio
  
    for (let i = 0; i < inputValue.length; i++) {
      const character = inputValue[i];
      const unicodeValue = inputValue.charCodeAt(i); // convertir a ascii
      console.log (unicodeValue);
      if (unicodeValue >= 65 && unicodeValue <= 90){ // código ASCII de letras mayúsculas
        const charnum = ((unicodeValue - 65 + parseInt(offsetValue)) % 26 + 65); // parseInt convertir string a número entero
        const character = String.fromCharCode(charnum);
        password += character;
      } 
      else{
        alert ("El texto ingresado no es válido");
      }
      textCoded.value = password; // mostrar resultado en el cuadro  de respuesta
      console.log (password); 
    }
  },
  decode: function () {
    const offsetValue = offsetDecode.value; //convertir objeto en valor
    const inputValue = textToDecode.value;
    console.log (offsetValue,inputValue); //verificar lo que captura
  
    let password = ""; // regresar valor vacio
  
    for (let i = 0; i < inputValue.length; i++) {
      const character = inputValue[i];
      const unicodeValue = inputValue.charCodeAt(i); // convertir a ascii
      console.log (unicodeValue);
      if (unicodeValue >= 65 && unicodeValue <= 90){ // código ASCII de letras mayúsculas
        const charnum = (((unicodeValue - 65) - parseInt(offsetValue)) % 26 + 65); // parseInt convertir string a número entero
        const character = String.fromCharCode(charnum);
        password += character;
      } 
      else{
        alert ("El texto ingresado no es válido");
      }
      textDecoded.value = password; // mostrar resultado en el cuadro  de respuesta
      console.log (password); 
    }
  }
};

export default cipher;