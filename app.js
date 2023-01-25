let text = document.querySelector('.text'),
cnt = document.querySelector('.container')

document.querySelector('.btn').addEventListener('click',()=>{
  text = document.querySelector('.text')
let symbols = '0123456789ABCDEF'
color = '#'

for (let index = 0; index < 6; index++) {

  color = color+symbols[Math.floor(Math.random()*16)]
 
}
text.textContent = color
cnt.style.backgroundColor = color
})


