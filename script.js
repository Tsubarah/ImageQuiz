const guessImage = document.querySelector('.imageWrapper img');
const btns = document.querySelectorAll('.btn');
const resultBtn = document.querySelector('.resultBtn');
const startQuiz = document.querySelector('.startQuiz');
const quizContainer = document.querySelector('.quizContainer');
const score = document.querySelector('.score')

const initialStudents = [...students];


//Shuffle array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array [j];
    array[j] = temp;
  }
}

shuffleArray(initialStudents);

// Gets a new array with students names
const studentsNames = initialStudents.map(student => student.name);
let randomStudents = initialStudents.slice(0, 4);
let randomNumber = [Math.floor(Math.random() * 3)];
let randomStudent = randomStudents[randomNumber];
let correctAnswer = 0;
let guesses = 0;
let maxGuesses = 10;

guessImage.src = randomStudent.image;



const restartGame = () => {
    const restartQuiz = document.querySelector('.restartQuiz')
    const finalResult = document.querySelector('.finalResult')
    
    quizContainer.classList.add('hidden');
    restartQuiz.classList.remove('hidden');
    finalResult.classList.remove('hidden');
    finalResult.innerHTML = `You scored ${correctAnswer} / ${maxGuesses} !`

    restartQuiz.addEventListener('click', e => {
      if (e.target.innerText === "Play again!") {
        restartQuiz.classList.add('hidden');
        finalResult.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        correctAnswer = 0;
        guesses = 0;
        reset()
      }
    })
}


// Function to prevent any clicks
const preventClicks = () => {
  btns.forEach(button => {
    button.style.pointerEvents = "none";
  })
}

startQuiz.addEventListener('click', e => {
  
  if (e.target === startQuiz) {
    startQuiz.classList.add('hidden');
    quizContainer.classList.remove('hidden');
  }
})

const getRandomStudent = () => {
  randomStudents = initialStudents.slice(0, 4);
  randomNumber = [Math.floor(Math.random() * 3)];
  randomStudent = randomStudents[randomNumber];
}


// Resets page
const reset = () => {
  shuffleArray(initialStudents)
  getRandomStudent();

  btns.forEach((button, i) => {
    button.classList.remove('btn-correct');
    button.classList.remove('btn-wrong');
    button.removeAttribute('data-correct');
    button.style.pointerEvents = "auto";

    if (randomStudents[i].name === randomStudent.name) {
      button.setAttribute('data-correct', 'true');
    }

    button.innerHTML = randomStudents[i].name;
  })
  
  guessImage.src = randomStudent.image;
  score.innerHTML = `${correctAnswer} / ${maxGuesses}`;
  if (guesses === maxGuesses) {
    restartGame();
  } 
}


const displayScore = () => {
  score.classList.toggle('toggleScore');
}


// Result button that can be toggled
resultBtn.addEventListener('click', () => {
  displayScore();
  score.innerHTML = `${correctAnswer} / ${maxGuesses}`;
});


// Set random names to buttons and add click event
  btns.forEach((button, i) => {

    button.innerHTML = randomStudents[i].name;
    if (randomStudents[i].name === randomStudent.name) {
      button.setAttribute('data-correct', 'true');
    }

    button.addEventListener('click', e => {
      const correctBtn = document.querySelector("[data-correct='true']");
  
      if (e.target.innerText === randomStudent.name) {
        correctAnswer++;
        guesses++;
        button.classList.add('btn-correct');
      } else {
        guesses++;
        button.classList.add('btn-wrong');
        correctBtn.classList.add('btn-correct');
      }
      
      preventClicks();
      setTimeout(() => {
        reset();
      }, 1000);
    });
  });
