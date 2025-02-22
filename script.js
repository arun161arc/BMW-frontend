window.onscroll = function() {
    let nav = document.querySelector(".nav");

    if (window.scrollY > 750) {
        nav.classList.add("scrolled"); 
    } else {
        nav.classList.remove("scrolled"); 
    }
};



























// const { type } = require("express/lib/response");

// function abc(){
//     console.log(abc.xyz)
// }
// abc()
// abc.xyz = 400;
// abc.xyz = 200 ;
// abc();

// const number = [1,2,3,4]
// number[100] = 500
// console.log(number)

// console.log(typeof typeof 100)

// const arr = [...'ARUN']
// console.log(arr)
// console.log(typeof arr)

// console.log(parseInt('10+2'))
// console.log(parseInt('7FM'))
// console.log(parseInt('M7F'))

// console.log(isNaN('ARUN'))

// console.log([1,2].map(num =>{
//     if(num>0) return ;
//     return num*3
// }))