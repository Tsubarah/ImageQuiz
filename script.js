
const guessImage = document.querySelector('#guessImageWrapper img');
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
const studentName = randomStudent.name;
const studentImage = randomStudent.image;
guessImage.src = studentImage;

console.log(randomStudent);
// console.log(randomImage);

// Array that collects shown students
const shownStudents = [];
shownStudents.push(randomStudent);



  
  


  //create array of students names
const studentsNames = students.map(student => student.name)

console.log(studentsNames);


const randomBtnNumber = Math.floor(Math.random() * btns.length);
const randomBtn = btns[randomBtnNumber];



console.log(randomBtn);
console.log(btns);


btns.forEach(btn => {
  btn.innerHTML = studentsNames[Math.floor(Math.random() * studentsNames.length)];
})





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





// function getRandomNumber() {
//   return Math.floor(Math.random() * 3);
// }

// const getRandomStudent = getRandomNumber()
// const randomStudent = students[getRandomStudent];
// const imageSource = randomStudent.image;


// let guessName = randomStudent.name;
// let guessedName;

// console.log(guessName);