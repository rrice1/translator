
let translator = {
    languages: [
      {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ]
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    };
let englishInput = document.getElementById('englishInput');

let swedishClick = () => {
if(englishInput.value==='merry'){
printToDom(englishInput.value, 'popUp')
};
// printToDom(englishInput.value, 'popUp');
};




document.getElementById("swedish").addEventListener("click", swedishClick);




