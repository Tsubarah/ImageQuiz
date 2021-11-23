const guessImage = document.querySelector('#imageWrapper img');
const btns = document.querySelectorAll('.btn');


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


const randomStudent = students.shift();
guessImage.src = randomStudent.image;
let correctBtn = btns[Math.floor(Math.random() * btns.length)];

// Gets a new array with students names
const studentsNames = students.map(student => student.name);

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
}

console.log("Random student", randomStudent)


console.log(correctBtn);

const buttonNames = [];

for(let i = 0; i < 4; i++) {
  let name = studentsNames[Math.floor(Math.random() * studentsNames.length)];

  if (buttonNames.includes(name)) {
    studentsNames.filter(studentName => studentName === name)
    name = studentsNames[Math.floor(Math.random() * studentsNames.length)];
  }
  buttonNames.push(name);
}

// Set random names to buttons and add click event

btns.forEach((button, i) => {

  button.innerHTML = buttonNames[i];

  
  button.addEventListener('click', e => {
    if (e.target === correctBtn) {
      button.classList.add('btn-correct');
      console.log("You clicked the correct button");
    } else {
      correctBtn.classList.add('btn-correct');
      button.classList.add('btn-wrong');
      console.log("wrong button");
    }
    preventClicks();
    setTimeout(() => {
      reset();
    }, 1000)
    
  }) 
})

correctBtn.innerHTML = randomStudent.name;
