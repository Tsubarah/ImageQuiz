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


// Renders page
const reset = () => {
  const newStudent = students.shift();
  correctBtn = btns[Math.floor(Math.random() * btns.length)];
  btns.forEach(button => {
    button.innerHTML = studentsNames[Math.floor(Math.random() * studentsNames.length)];
    button.classList.remove('btn-correct')
    button.classList.remove('btn-wrong')
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
    setTimeout(() => {
      reset();
    }, 3000)
    
  }) 
})

correctBtn.innerHTML = randomStudent.name;




  // 2. Pick random name
  // 3. Set name in data-attribute

  // btns.addEventListener('submit', e => {
  //   e.preventDefault;
  // // 4. If random name is equal to image name = set green border else red border
  // // 5. Start timer (2-3 sec)
  // // 6. reset(clear everything);
  // // 7. init();
  //   console.log(e.target.classList);
  // });