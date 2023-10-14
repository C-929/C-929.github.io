let text = document.getElementById('welcome')
let btn = document.getElementById('btn')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  text.style.marginTop = value * 2 + 'px'
  btn.style.marginTop = value * 1.5 + 'px'
})