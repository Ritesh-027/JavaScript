const plus = document.querySelector('.plus');
const num = document.querySelector('.num');
const minus = document.querySelector('.minus');

let a = 1;

plus.addEventListener("click",()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
})

minus.addEventListener("click",()=>{
    if(a > 0){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        console.log(a);
        }
    })
      