const students = [
 {
   name: "A",
   image: "/images/benjamin_T.jpg",
   show: false 
 },
 {
  name: "B",
  image: "bla", 
  show: false
},
{
  name: "C",
  image: "blabla", 
  show: false
},
{
  name: "D",
  image: "blablabla", 
  show: false
}
];

const guessImage = document.querySelector('#guessImageWrapper img');
const profileImage = document.querySelector('.profileImage');
const btns = document.querySelectorAll('.btn');




function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

const getRandomStudent = getRandomNumber()
const randomStudent = students[getRandomStudent];
const imageSource = randomStudent.image;


let guessName = randomStudent.name;
let guessedName;

console.log(guessName);




  // 1. Select person that has not been shown before and show their image
  
  const checkStatus = (studentStatus => {
    if (studentStatus.show === false) {
      guessImage.src = imageSource;
      console.log(guessImage.src);
    }
  })
  
  checkStatus(randomStudent);

  

  
  

  //create array of students names
  const studentsNames = students.map(student => student.name)

  console.log(studentsNames);


btns.forEach(btn => {
  btn.innerHTML = studentsNames[Math.floor(Math.random() * studentsNames.length)];

  
  // 2. Pick random name
  // 3. Set name in data-attribute

  btn.addEventListener('submit', e => {
    e.preventDefault;
  // 4. If random name is equal to image name = set green border else red border
  // 5. Start timer (2-3 sec)
  // 6. reset(clear everything);
  // 7. init();
    console.log(e.target.classList);
  })

});

