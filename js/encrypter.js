//Obtenemos los elementos del DOM
var textAreaInput = document.getElementById("input");
var btEncriptar = document.getElementById("encriptar");
var btDesencriptar = document.getElementById("desencriptar");
var btLimpiar = document.getElementById("limpiar");
var textAreaOutput = document.getElementById("textArea");
var btCopiar = document.getElementById("copiar");

//Claves para la encriptacion de texto
var keys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

//Asignar las funciones correspondientes a los botones
btEncriptar.onclick = encriptar;
btDesencriptar.onclick = desencriptar;
btLimpiar.onclick = limpiar;
btCopiar.onclick = copiar;

//Valida que el texto ingresado solo contenga letras minusculas sin caracteres especiales
//ademas, valida que el usuario haya ingresado algun valor
function validateInput(texto)
{
    if(texto == "") return false;
    return(/^[a-z \n]*$/.test(texto));
}

//Encripta el texto
function encriptar()
{
    var texto = textAreaInput.value;//Obtiene el texto 
                    
    if(validateInput(texto))//Valida que el texto ingresado sea valido
    {
        //Para cada una de las claves obtiene el valor por el que sera reeemplazado
        for(var letra in keys)
        {
            //Reeemplaza la letra obtenida, por su valor encriptado
            texto = texto.replaceAll(letra, keys[letra]);
        }

        textAreaOutput.value = texto;//Actualiza el text area con el texto encriptado
        textAreaInput.value = "";//Limpia el text field
    }
}

//Desencripta el texto
function desencriptar()
{
    var texto = textAreaInput.value;//Obtiene el texto   
                    
    if(validateInput(texto))//Valida que el texto ingresado sea valido
    {
        for(var letra in keys)
        {
            //Reeemplaza el valor encriptado, por la letra correspondiente
            texto = texto.replaceAll(keys[letra], letra);
        }

        textAreaOutput.value = texto;//Actualiza el text area con el texto desencriptado
        textAreaInput.value = "";//Limpia el text field
    }
}

function limpiar() {
    textAreaInput.value = "";
    textAreaOutput.value = "";
}

function copiar() {
    navigator.clipboard.writeText(textAreaOutput.value).then((result) => {
        console.log("Copiado al portapapeles");
    }).catch((err) => {
        console.log("Error al copiar");
    });
}