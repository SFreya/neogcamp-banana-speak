var btnTranslate=document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput)

function clickEventHnadler()
{
    //console.log("clicked");
    //console.log("input", txtInput.value);

    outputDiv.innerText = "ananabbanana  " + txtInput.value;
}

btnTranslate.addEventListener("click",clickEventHnadler)

