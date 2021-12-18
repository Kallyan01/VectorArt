var bugbtn = document.querySelector('.bmenu');
var mitem = document.querySelector('.navmenu');
let nav = document.getElementById('navbar')
let lines = document.querySelectorAll('.line')
let bar = Array.from(lines);
console.log(bar.length) 
bugbtn.addEventListener("click", expand)
function expand() {
  mitem.classList.toggle('show')
}
function scl(){
// let x=window.pageXOffset
let y=window.pageYOffset
if(y>100)
{
nav.style="background:red;box-shadow: 0px 0px 10px 1px rgb(82, 82, 82);"
bar.map(i=>{
    i.style="background:#fff"
})
}
else
{
    nav.style="background:#F8C853;box-shadow: 0px 0px 0px 0px rgb(82, 82, 82);"
    bar.map(i=>{
        i.style="background:#EF613A"
    })
}
// console.log(x)
console.log(y)
}

document.addEventListener('scroll',scl)