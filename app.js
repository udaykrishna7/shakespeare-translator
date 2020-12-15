var txtInput = document.querySelector("#input-text");
var translateBtn = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output-text");

var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json?";

function translateUrl(text) {
    return serverUrl + "text=" + text
};

function errorHandler(error){
    console.log("error occured" + error);
    alert("There is a problem with the server. Try again later");
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(translateUrl(inputText))
        .then(respone => respone.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)

    
};

translateBtn.addEventListener("click", clickHandler)
