
let translator = {
    swedish: [
      {english:"merry", translation:"god"},
      {english:"christmas", translation:"jul"},
      {english:"and", translation:"och"},
      {english:"happy", translation:"gott"},
      {english:"new", translation:"nytt"},
      {english:"year", translation:"år"}
    ],
    french:[
        {english:"merry", translation:"joyeux"},
        {english:"christmas", translation:"Noël"},
        {english:"and", translation:"et"},
        {english:"happy", translation:"content"},
        {english:"new", translation:"Nouveau"},
        {english:"year", translation:"an"},
    ],
    spanish:[
        {english:"merry", translation:"alegre"},
        {english:"christmas", translation:"Navidad"},
        {english:"and", translation:"y"},
        {english:"happy", translation:"contento"},
        {english:"new", translation:"nuevo"},
        {english:"year", translation:"año"},
    ],
};


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    };
let englishInput = document.getElementById('englishInput');

let swedishClick = () => {
    let newString='';
    for(let i=0; i<translator.swedish.length;i++){
        if(translator.swedish[i].english === englishInput.value){
            newString +=`<div class="translationArea">`;
            newString +=`<h4 class="translationAreaWords">The translation for "${englishInput.value}" from English to Swedish is: ${translator.swedish[i].translation}</h4>`;
            newString += `</div>`;
            printToDom(newString,'popUp')
            break;
        } else printToDom('Oops! Please choose a word from the list.','popUp');
    };
};
// if(englishInput.value==='merry'){
// printToDom(englishInput.value, 'popUp')
// };
// printToDom(englishInput.value, 'popUp');
let frenchClick = () => {
    let newString = '';
    for(let i=0; i<translator.french.length;i++){
        if(translator.french[i].english === englishInput.value){
            newString +=`<div class="translationArea">`;
            newString +=`<h4 class="translationAreaWords">The translation for "${englishInput.value}" from English to French is: ${translator.french[i].translation}</h4>`;
            newString += `</div>`;
            printToDom(newString,'popUp')
            
            break;
        } else printToDom('Oops! Please choose a word from the list.','popUp');
    };
};

let spanishClick = () => {
    let newString='';
    for(let i=0; i<translator.spanish.length;i++){
        if(translator.spanish[i].english === englishInput.value){
            newString +=`<div class="translationArea">`;
            newString +=`<h4 class="translationAreaWords">The translation for "${englishInput.value}" from English to Spanish is: ${translator.spanish[i].translation}</h4>`;
            newString += `</div>`;
            printToDom(newString,'popUp')
            break;
        } else printToDom('Oops! Please choose a word from the list.','popUp');
    };
};




document.getElementById("swedish").addEventListener("click", swedishClick);
document.getElementById("french").addEventListener("click", frenchClick);
document.getElementById("spanish").addEventListener("click", spanishClick);




