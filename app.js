var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var translateButton = document.querySelector("#translate-btn");
var errorMessage =document.querySelector("#errorMessage");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(userInput){
    return serverURL + "?" + "text=" + userInput;
}

function insertOutputToTextArea(translatedText){
    return outputText.innerHTML = translatedText;
}


function clickHandler(){

 var userInput = inputText.value;
 if(userInput === ""){
     errorMessage.innerText="Field cannot be empty!";
 }else{
  fetch(getTranslationURL(userInput))
    .then((response) => response.json())
    .then(data =>{
        var translatedText = data.contents.translated;
        insertOutputToTextArea(translatedText)
        errorMessage.innerText = "";
    })
    .catch();
 }

}


translateButton.addEventListener("click",clickHandler)
