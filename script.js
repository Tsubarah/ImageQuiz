const students = [
 {
   name: "A",
   image: "/images/benjamin_T.jpg",
   show: false 
 },
 {
  name: "B",
  image: "", 
  show: false
},
{
  name: "C",
  image: "", 
  show: false
},
{
  name: "D",
  image: "", 
  show: false
}
];

const guessImage = document.querySelector('.guessImage');
const profileImage = document.querySelector('.profileImage');
const btns = document.querySelectorAll('.btn');

let guessName;
let guessedName;

  // 1. Select person that has not been shown before and show their image
  
  

  

  //create array of students names
  // const studentsNames = students.map(student => {
  //   return student.name;
  // });

  // console.log('Student names:', studentsNames);

btns.forEach(btn => {
  // 2. Pick random name
  // 3. Set name in data-attribute

  btn.addEventListener('click', e => {
    e.preventDefault;
  // 4. If random name is equal to image name = set green border else red border
  // 5. Start timer (2-3 sec)
  // 6. reset(clear everything);
  // 7. init();
    console.log(e.target.classList);
  })

});

