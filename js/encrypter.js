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
btEncriptar.addEventListener("click", evt => transformText(true));
btDesencriptar.addEventListener("click", evt => transformText(false));
btLimpiar.onclick = limpiar;
btCopiar.onclick = copiar;

//Valida que el texto ingresado solo contenga letras minusculas sin caracteres especiales y/o no este vacio
function isTextValid(texto) {
    return texto != "" && /^[a-z \n]*$/.test(texto);
}

//Encripta o desencripta el texto en funcion del argumento recibido
function transformText(encrypt) {
    var texto = textAreaInput.value;//Obtiene el texto 
                    
    if(isTextValid(texto)){
        //Para cada una de las claves obtiene el valor por el que sera reeemplazado
        for(var letra in keys) {
            //Remplaza la letra o valor en funcion de si se esta desencriptando o encriptando un texto
            if(encrypt) texto = texto.replaceAll(letra, keys[letra]);
            else texto = texto.replaceAll(keys[letra], letra);
        }

        textAreaOutput.value = texto;//Actualiza el text area con el texto encriptado
        textAreaInput.value = "";//Limpia el text area (input)
        document.documentElement.style.setProperty('--url', 'none');//"Elimina" la imagen de fondo en el textAreaOutput

        return;
    }

    Swal.fire({
      title: 'Texto invalido...',
      text: 'Solo se admiten letras minusculas sin acentos',
      icon: 'error',
    })
}

function limpiar() {
    textAreaInput.value = "";
    textAreaOutput.value = "";
    document.documentElement.style.setProperty('--url', 'url(\'../images/pagina-no-encontrada.png\')');//Establece la imagen de fondo en el textAreaOutput
}

function copiar() {
    text = textAreaOutput.value;

    if (text == "") return;

    navigator.clipboard.writeText(text).then((result) => {
        Swal.fire(
          '',
          'Texto copiado exitosamente!',
          'success'
        );
    }).catch((err) => {
        console.log(err);
    });
}