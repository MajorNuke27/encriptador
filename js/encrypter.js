//Obtenemos los botones y campo de input y output
var textField = document.getElementById("input");
var btEncriptar = document.getElementById("encriptar");
var btDesencriptar = document.getElementById("desencriptar");
var textArea = document.getElementById("textArea");

//Clves para la encriptacion de texto
var keys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

//Asiganr las funciones correspondientes a los botones encriptar y desencriptar
btEncriptar.onclick = encriptar;
btDesencriptar.onclick = desencriptar;

//Valida que el texto ingresado solo contenga letras minusculas sin caracteres especiales
//ademas, valida que el usuario haya ingresado algun valor
function validateInput(texto)
{
    if(texto.length == "") return false;
    return(/^[a-z]*$/.test(texto));
}

//Encripta el texto
function encriptar()
{
    var texto = textField.value;//Obtiene el texto 
                    
    if(validateInput(texto))//Valida que el texto ingresado sea valido
    {
        //Para cada una de las claves obtiene el valor por el que sera reeemplazado
        for(var letra in keys)
        {
            //Reeemplaza la letra obtenida, por su valor encriptado
            texto = texto.replaceAll(letra, keys[letra]);
        }

        textArea.value = texto;//Actualiza el text area con el texto encriptado
        textField.value = "";//Limpia el text field
        textField.value = texto;
    }
}

//DEsencripta el texto
function desencriptar()
{
    var texto = textField.value;//Obtiene el texto   
                    
    if(validateInput(texto))//Valida que el texto ingresado sea valido
    {
        for(var letra in keys)
        {
            //Reeemplaza el valor encriptado, por la letra correspondiente
            texto = texto.replaceAll(keys[letra], letra);
        }

        textArea.value = texto;//Actualiza el text area con el texto desencriptado
        textField.value = "";//Limpia el text field
        textField.value = texto;
    }
}