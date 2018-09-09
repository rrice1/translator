let swedish = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
let french = {"merry":"joyeux","christmas":"Noël","and":"et","happy":"content","new":"Nouveau","year":"an"};
let spanish = {"merry":"alegre","christmas":"Navidad","and":"y","happy":"contento","new":"nuevo","year":"año"};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    };
let englishInput = document.getElementById('englishInput');

let swedishClick = () => {
    let newString='';
    let splitEng = englishInput.value.split(' ');
    for(let i=0; i<splitEng.length;i++){
       newString += swedish[splitEng[i]] + ' '; 

            printToDom(newString,'popUp')
    }; 
};

let frenchClick = () => {
    let newString='';
    let splitEng = englishInput.value.split(' ');
    for(let i=0; i<splitEng.length;i++){
       newString += french[splitEng[i]] + ' '; 
       printToDom(newString,'popUp')
    };
};

let spanishClick = () => {
    let newString='';
    let splitEng = englishInput.value.split(' ');
    for(let i=0; i<splitEng.length;i++){
       newString += spanish[splitEng[i]] + ' '; 
       printToDom(newString,'popUp')
    };
};




document.getElementById("swedish").addEventListener("click", swedishClick);
document.getElementById("french").addEventListener("click", frenchClick);
document.getElementById("spanish").addEventListener("click", spanishClick);




