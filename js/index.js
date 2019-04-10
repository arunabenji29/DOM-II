// Your code goes here
//mouseover the logo heading
let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', function(event) {
    event.target.style.color = 'purple'
})

//wheel over the home link
let inverseContent = document.querySelector('.inverse-content .text-content')
inverseContent.addEventListener('wheel', function(event) {
    event.target.style.color = 'orange'
})


//dblclick over the about us link
let headerTwo = document.querySelectorAll('h2')
headerTwo.forEach(element => element.addEventListener('dblclick', function(event) {
    event.target.style.color = 'green'
}))


//keydown over the firstname text
const firstName = document.querySelector('input.first-name')
firstName.addEventListener('keydown', function(event) {
  console.log('keydown:', event.key)  
})

//select over the firstname text
const input = document.querySelector('input.last-name');
input.addEventListener('select', function (event) {
    //   const log = document.getElementById('log');
      const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        console.log(`you selected: ${selection}`)
    });

//resize over the firstname text    
let container = document.querySelector('.container')
container.addEventListener('resize',function(event){
    console.log(`resize: ${event.resize}`)
});


//focus over the blog link
let formSubmit = document.querySelector('.form-submit')
formSubmit.addEventListener('focus', function(event) {
    event.target.style.color = 'red'
    console.log('focused')
})

//load used for the entire window
window.addEventListener('load', function(event) {
    console.log(`the page is loaded`)
})

//stop navigation items from refreshing
let navBar = document.querySelector('.nav')
navBar.addEventListener('click',function(event){
    event.preventDefault()
    console.log('cant load')
})

//drag items
let image2 = document.querySelector('.rounded')
image2.addEventListener('dragend',function(event){
    event.preventDefault();
    event.target.style.transform = 'scale(2)'
    console.log(`dragend: ${event.target}`)
})


//drop items
let image1 = document.querySelector('.round')
document.addEventListener('drop',function(event){
    event.preventDefault();
    console.log(`drop: ${event.target}`)
})



//scroll
// let contentDestination = document.querySelector('.content-destination')
window.addEventListener('scroll', function(event) {
    // event.target.style.color = 'red'
    console.log(`content destination ${event.target}`)
})

const businImg = document.querySelector('.hidden')
window.addEventListener('load',event => {
    businImg.classList.remove('hidden')
    businImg.classList.add('slideRight')
})