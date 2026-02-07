let cardFlip = document.querySelector('a[href="#"]')
console.log(cardFlip)

cardFlip.addEventListener('profile-card', cardFlipper)

function mouseoutFlipper(){
  mouseoutFlip.classList.toggle('the-mouseout')
}
mouseoutFlip.addEventListener('animationend', cardFlipper)

// 
let mouseoutFlip = document.querySelector('a[href="#the"]')
console.log(mouseoutFlip)

mouseoutFlip.addEventListener('mouseout', mouseoutFlipper)

function mouseoutFlipper(){
  mouseoutFlip.classList.toggle('the-mouseout')
}
mouseoutFlip.addEventListener('animationend', mouseoutFlipper)