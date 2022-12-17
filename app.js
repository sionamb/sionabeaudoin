// var i = 0;
// var txt = "Siona Beaudoin"; 
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("name").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

const h1 = document.querySelector("#name")
let myName = ["S", "i", "o", "n", "a", "_", "B", "e", "a", "u", "d", "o", "i", "n"]

function typeWriter(){
    if(i < myName.length){
        h1 += myName[i]
        setTimeout(typeWriter, 50)
    }
}