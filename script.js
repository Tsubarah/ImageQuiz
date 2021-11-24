const guessImage = document.querySelector('#imageWrapper img');
const btns = document.querySelectorAll('.btn');
const resultBtn = document.querySelector('.resultBtn');


//Shuffle array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array [j];
    array[j] = temp;
  }
}

// Selects person that has not been shown before and show their image
shuffleArray(students);
// Gets a new array with students names
const studentsNames = students.map(student => student.name);
const randomStudent = students.shift();
// Array for shown names
const buttonNames = [];


guessImage.src = randomStudent.image;
let correctAnswer = 0;
let guesses = students.length;
let correctBtn = btns[Math.floor(Math.random() * btns.length)];


// Function to prevent any clicks
const preventClicks = () => {
  btns.forEach(button => {
    button.style.pointerEvents = "none";
  })
}

// Resets page
const reset = () => {
  const newStudent = students.shift();
  correctBtn = btns[Math.floor(Math.random() * btns.length)];
  btns.forEach(button => {
    button.innerHTML = studentsNames[Math.floor(Math.random() * studentsNames.length)];
    button.classList.remove('btn-correct')
    button.classList.remove('btn-wrong')
    button.style.pointerEvents = "auto";
  })
  correctBtn.innerHTML = newStudent.name;
  guessImage.src = newStudent.image;
  score.innerHTML = `${correctAnswer} / ${studentsNames.length}`;
}


resultBtn.addEventListener('click', () => {
  const score = document.querySelector('#score')
  
  function displayScore() {
    score.classList.toggle('toggleScore');
  }
  displayScore()
  
  score.innerHTML = `${correctAnswer} / ${studentsNames.length}`;
});


// score.innerHTML = `${correctAnswer} / ${studentsNames.length}`;
// checks if name has been shown, if true name gets pushed to buttonNames array
for(let i = 0; i < 4; i++) {
  let name = studentsNames[Math.floor(Math.random() * studentsNames.length)];

  if (buttonNames.includes(name)) {
    studentsNames.filter(studentName => studentName === name)
    name = studentsNames[Math.floor(Math.random() * studentsNames.length)];
  }
  buttonNames.push(name);
}
// document.querySelector('.remainingStudents').innerHTML = `<div>Remaining students to guess ${guesses}</div>`


// Set random names to buttons and add click event
btns.forEach((button, i) => {

  button.innerHTML = buttonNames[i];


  button.addEventListener('click', e => {
    if (e.target === correctBtn) {
      correctAnswer++;
      button.classList.add('btn-correct');
      console.log("correct answer:", correctAnswer);
      console.log("You clicked the correct button");
    } else {
      correctBtn.classList.add('btn-correct');
      button.classList.add('btn-wrong');
      console.log("guesses:", guesses);
      console.log("wrong button");
    }
    preventClicks();
    setTimeout(() => {
      reset();
    }, 1000)
    
  }) 
})


correctBtn.innerHTML = randomStudent.name;