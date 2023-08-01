/* eslint-disable no-console */
/* 
Implementar el objeto cipher que contiene 2 métodos o funciones:
cipher.encode(offset, string)
cipher.decode(offset, string)
*/

// Objeto cipher con 2 métodos o funciones: encode y  decode
const cipher = {
  encode: function (offset,inputValue) { // parámetros (offset,string)
    offset = parseInt(offset);
    if (typeof offset !== 'number' || typeof inputValue !== 'string' ) {
      // Arrojar un error que anuncie que los argumentos recibidos son inválidos
      throw new TypeError("Los datos ingresados no son válidos. Deben ser texto o número");
    }
    let password = ""; // regresar valor vacio
    for (let i = 0; i < inputValue.length; i++) { // recorrer todas las letras ingresadas
      const unicodeValue = inputValue.charCodeAt(i); // convertir a ascii
      if (unicodeValue >= 65 && unicodeValue <= 90){ // código ASCII de letras mayúsculas
        const charnum = ((unicodeValue - 65 + offset) % 26 + 65); // parseInt convertir string a número entero
        const character = String.fromCharCode(charnum); //unir los caracteres encriptados en un string
        password += character; // regresar la union de caracteres
      } 
      else{
        alert ("El texto ingresado no es válido");
      }
    }
    return password;
  },
  decode: function (offset,inputValue) { // parámetros (offset,string)
    offset = parseInt(offset);
    //console.log (offset,inputValue); //verificar lo que captura
    if (typeof offset !== 'number' || typeof inputValue !== 'string' ) {
      // Arrojar un error que anuncie que los argumentos recibidos son inválidos
      throw new TypeError("Los datos ingresados no son válidos. Deben ser texto o número");
    }
    let password = ""; // regresar valor vacio
    for (let i = 0; i < inputValue.length; i++) {
      //const character = inputValue[i];
      //offset = parseInt(offset);
      const unicodeValue = inputValue.charCodeAt(i); // convertir a ascii
      if (unicodeValue >= 65 && unicodeValue <= 90){ // código ASCII de letras mayúsculas
        const charnum = (((unicodeValue - 65 - (offset % 26) + 26) % 26)+65);
        const character = String.fromCharCode(charnum); //unir los caracteres encriptados en un string
        password += character; // regresar la union de caracteres
        console.log (charnum);
        // (parseInt(Math.abs(unicodeValue - 65 - offset + 26) % 26) + 65); 
        // Math.abs convertir valor negativo a positivo 
        // parseInt convertir string a número entero
      } 
      else{
        alert ("El texto ingresado no es válido");
      }
    }
    return password; 
  }
};

export default cipher; // exportar archivo de funciones al index


// minúsculas (((unicodeValue - 97 + offsetValue) % 26) + 97)