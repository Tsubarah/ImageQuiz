const students = [
 {
   name: "A",
   img: "", 
 },
 {
  name: "B",
  img: "", 
},
{
  name: "C",
  img: "", 
}
];

const guessImage = document.querySelector('.guessImage');
const profileImage = document.querySelector('.profileImage');
const btns = document.querySelectorAll('.btn');



btns.forEach(btn => {
  btn.addEventListener('click', e => {
    console.log(e.target.classList);
  })

});

