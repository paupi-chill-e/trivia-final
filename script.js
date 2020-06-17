/*definicion de variables de primera pantalla*/

const  welcome = document.getElementById('bienvenido');
const mainMenu = document.getElementById('main-menu');
const buttonStart = document.getElementById('button-start');
const buttonFirstGeneration = document.getElementById('button-first-generation');
const buttonSecondGeneration = document.getElementById('button-second-generation');

/*condicion para nombre y menu*/

const menu = () => {
  /**/
  var userName = document.getElementById('input-name').value;
  
    
 if( userName == null || userName.length == 0 || /^[a-z0-9][a-z0-9._\-]*$/.test(userName) ) {
  alert("Ingrese un nombre y apellido por favor.");
} else {

  welcome.classList.add('disappear');
  mainMenu.classList.remove('disappear');
  /*console.log(userName);*/
  document.getElementById('user-name').innerHTML += 'Querid@, ' + userName;}
}


buttonStart.addEventListener('click', menu);

/*Definicion de variables para las preguntas */

const showQuestionsFirstGeneration = document.getElementById('show-questions-first-generation');
const showQuestionsSecondGeneration = document.getElementById('show-questions-second-generation');
const buttonResultFirstGeneration = document.getElementById('button-result-first-generation');
const buttonResultSecondGeneration = document.getElementById('button-result-second-generation');

const triviaFirstGeneration = () => {

  showQuestionsFirstGeneration.classList.remove('disappear');
  mainMenu.classList.add('disappear');
}

const triviaSecondGeneration = () => {

  showQuestionsSecondGeneration.classList.remove('disappear');
  mainMenu.classList.add('disappear');
}

/*Accion de botones a elegir*/

buttonFirstGeneration.addEventListener('click', triviaFirstGeneration);
buttonSecondGeneration.addEventListener('click', triviaSecondGeneration);
/*Definicion de variables para resultado de cada trivia*/

const firstGenerationResult = document.getElementById('first-generation-result');
const secondGenerationResult = document.getElementById('second-generation-result');

/*acción boton jugar otra vez numero 1*/
const buttonPlayAgain= document.getElementById('play-again')
const playAgain = () => location.reload(true);
buttonPlayAgain.addEventListener('click', playAgain)

/*Definicion de variables para las trivia primera generación*/

const resultTriviaFirstGeneration = () => {
  showQuestionsFirstGeneration.classList.add('disappear');
  firstGenerationResult.classList.remove('disappear');
  document.getElementById('score1').innerHTML += '';
  document.getElementById('score2').innerHTML += '';
  let correctas = 0;
  const respA1 = document.getElementById('form-question1-first-generation').value;
  const respA2 = document.getElementById('form-question2-first-generation').value;
  const respA3 = document.getElementById('form-question3-first-generation').value;
  
  if (respA1 === "A1") {
    correctas++;
  }
  if (respA2 === "B2") {
    correctas++;
  }
  if (respA3 === "C1") {
    correctas++
  }
  const errores = (3 - correctas);
  document.getElementById('score1').innerHTML += '\n Aciertos: ' + correctas + '\n' + 'Errores:' + errores;

}


/*Definición para botones de resultado primera generacion */

buttonResultFirstGeneration.addEventListener('click', resultTriviaFirstGeneration);

/*acción boton jugar otra vez numero 2*/
const buttonPlayAgainFirst= document.getElementById('play-again-first')
const playAgainFirst = () => location.reload(true);
buttonPlayAgainFirst.addEventListener('click', playAgainFirst)

/*Definicion de variables para las trivia segunda generación*/

const resultTriviaSecondGeneration = () => {
  showQuestionsSecondGeneration.classList.add('disappear');
  secondGenerationResult.classList.remove('disappear');
  document.getElementById('score1').innerHTML += '';
  document.getElementById('score2').innerHTML += '';
  let correctas = 0;
  const respS1 = document.getElementById('form-question1-second-generation').value;
  const respS2 = document.getElementById('form-question2-second-generation').value;
  const respS3 = document.getElementById('form-question3-second-generation').value;
  /*console.log(respS1);*/
  if (respS1 === "D3") {
    correctas++;
  }
  if (respS2 === "F2") {

    correctas++;
  }
  if (respS3 === "G2") {
    correctas++
  }
  const errores = (3 - correctas);
  document.getElementById('score2').innerHTML += '\n Aciertos: ' + correctas + '\n' + 'Errores:' + errores;

}

/*Definición para botones de resultado segunda generacion uwu*/
buttonResultSecondGeneration.addEventListener('click', resultTriviaSecondGeneration);


