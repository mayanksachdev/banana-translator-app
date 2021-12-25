let myButton = document.querySelector('.btn')
let myTextArea = document.querySelector('.textarea-input')
let myOutputDiv = document.querySelector('.container-output')

let serverUrl = 'https://api.funtranslations.com/translate/minion.json'

function addUrlParameter(text) {
    let serverUrlParameter = serverUrl + '?' + 'text=' + text;
    return serverUrlParameter;
}


function fetchUrl(parameterValue) {

    fetch(addUrlParameter(parameterValue))
        .then(response => response.json())
        .then(jsonFile => {
            let outputValue = jsonFile.contents.translated;
            myOutputDiv.innerText = outputValue
        })
        .catch(error => {
            console.log('error has occured: ' + error)
            alert('there is some problem with the server. please, come back later.')

        })
}


myButton.addEventListener('click', function () {
    let userInput = myTextArea.value;
    if (!userInput) {
        alert('please enter a valid text!')
    } else {
        fetchUrl(userInput)
    }

})