var textField = document.getElementById("input");
var btEncriptar = document.getElementById("encriptar");
var btDesencriptar = document.getElementById("desencriptar");
var textArea = document.getElementById("textArea");
var keys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

btEncriptar.onclick = encriptar;
btDesencriptar.onclick = desencriptar;

function validateInput(texto)
{
    if(texto.length == 0) return false;
    return(/^[a-z ]*$/.test(texto));
}

function encriptar()
{
    var texto = textField.value;  
                    
    if(validateInput(texto))
    {
        for(var letra in keys)
        {
            texto = texto.replaceAll(letra, keys[letra]);
        }

        textArea.value = texto;
        textField.value = "";
        textField.value = texto;
    }
}

function desencriptar()
{
    var texto = textField.value;  
                    
    if(validateInput(texto))
    {
        for(var letra in keys)
        {
            texto = texto.replaceAll(keys[letra], letra);
        }

        textArea.value = texto;
        textField.value = "";
        textField.value = texto;
    }
}