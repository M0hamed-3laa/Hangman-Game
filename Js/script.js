let el = document.querySelector(".scroller");
let hight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / hight) * 100}%`;
});
//Letars
const letters = "abcdefghijklmnopqrstuvwxyz";
//get arr from letars
let lettrsArryar = Array.from(letters);

//select laters container
let latersContainer = document.querySelector(".latters");

//Generat laters
lettrsArryar.forEach((letter) => {
  //create span
  let span = document.createElement("span");
  //create lettrs text nods
  let theLettres = document.createTextNode(letter);
  //append the lettre to span
  span.appendChild(theLettres);
  //add class on span
  span.className = "lettre-box";
  //append span to the laters container
  latersContainer.appendChild(span);
});

//objct of words + categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
    "c++",
  ],
  movies: [
    "Prestige",
    " Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma",
    "Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bhrain", "Qatar"],
  Player: ["messi", "Ronaldo"],
};
//get random prperty
let allKyes = Object.keys(words);
//random Number depend on kyes length
let randomPrpertyNumber = Math.floor(Math.random() * allKyes.length);
//category
let randomPrpertyName = allKyes[randomPrpertyNumber];
// category wordes
let randomPrpertyValue = words[randomPrpertyName];
// random Number depend on words
let randomValueNumper = Math.floor(Math.random() * randomPrpertyValue.length);
//The chosen word
let randomValueValue = randomPrpertyValue[randomValueNumper];

// set category info
document.querySelector(".game-info .category span").innerHTML =
  randomPrpertyName;

//slecet lettre guess elment
let laterGuessContainer = document.querySelector(".latters-guess");

//convert chosen word to arryay
let letterAndSpace = Array.from(randomValueValue);

//create span append word
letterAndSpace.forEach((letter) => {
  //create empty span
  let emptySpan = document.createElement("span");
  //if letter is space
  if (letter === " ") {
    // add class to span
    emptySpan.className = "has-space";
  }

  //append to lettre guess container
  laterGuessContainer.appendChild(emptySpan);
});

//slecet guass span
let lattersguessSpan = document.querySelectorAll(".latters-guess span");
//set wrong attempts
let wrongAttempts = 0;
//select the draw element
let theDraw = document.querySelector(".hangman-draw");
//handel clicking on letter
document.addEventListener("click", (e) => {
  //set the chose status
  let theStatus = false;

  if (e.target.className === "lettre-box") {
    e.target.classList.add("clicked");
    //get letter on clicked
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    //chosen word the chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    // console.log(letterAndSpace);the chosen word

    theChosenWord.forEach((wordLetter, wordindex) => {
      //if the clicked letter equal one of the chosen word letter
      if (theClickedLetter == wordLetter) {
        //set status to true
        theStatus = true;
        //loop on all guss spans
        lattersguessSpan.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });

    //outsid loop
    //if letter wrong
    if (theStatus !== true) {
      //increase the wrong attempts
      wrongAttempts++;
      //add class wrong on the draw element
      theDraw.classList.add(`wrong-${wrongAttempts}`);
    }
  }
});
