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

// //drag ad drop
// const fill = document.querySelector('.fill')
// const image22 = document.querySelector('.img-content1')

// fill.addEventListener('dragstart',dragstart);
// image22.addEventListener('dragleave',dragleave)
// image22.addEventListener('dragenter',dragenter)
// image22.addEventListener('dragover',dragover)
// fill.addEventListener('dragend',dragend)
// image22.addEventListener('drop',drop)

// function dragstart(){
//     // console.log('start')
//     this.className += ' hold';
//     setTimeout(() => {
//         this.className = 'invisible'
//         fill.style.display='none'
//     },1000)
// }

// function dragend(){
//     // console.log('end')
//     this.className = 'fill'
// }

// function dragleave(){
//     // console.log('dragleave')
//     this.className = 'img-content1'
// }

// function dragenter(event){
//     event.preventDefault()
//     this.className += ' hovered'
//     console.log('dragenter')
// }

// function dragover(event){
//     event.preventDefault()
//     console.log('dragover')
// }

// function drop(){
//     console.log('drop')
//     this.className = 'img-content1'
//     this.append()
// }


//last section drag and drop
const lastSection1 = document.querySelector('.last-section1')
const lastSection2 = document.querySelector('.last-section2')

lastSection1.addEventListener('dragstart',dragstart);
lastSection2.addEventListener('dragleave',dragleave)
lastSection2.addEventListener('dragenter',dragenter)
lastSection2.addEventListener('dragover',dragover)
lastSection1.addEventListener('dragend',dragend)
lastSection2.addEventListener('drop',drop)

function dragstart(){
    // console.log('start')
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible'
        // fill.style.display='none'
    },1000)
}

function dragend(){
    // console.log('end')
    this.className = 'last-section1'
}

function dragleave(){
    // console.log('dragleave')
    this.className = 'empty'
}


function dragenter(event){
    event.preventDefault()
    this.className += ' hovered'
    // console.log('dragenter')
}

function dragover(event){
    event.preventDefault()
    console.log('dragover')
}

function drop(){
    console.log('drop')
    this.className = 'empty'
    this.append(lastSection1)
}

// //mousedown
// let image1 = document.querySelector('.round')
// image1.onmousedown = function(event){
//     image1.style.position = 'absolute'
//     image1.style.zIndex = 1000;
//     document.body.append(image1)

//     moveAt(event.pageX, event.pageY)

//     function moveAt(pageX,pageY){
//         image1.style.left = pageX - image1.offsetWidth/2 + 'px'
//         image1.style.top = pageY - image1.offsetHeight/2 + 'px'
//     }

//     function onMouseMove(event){
//         moveAt(event.pageX, event.pageY)
//     }

//     document.addEventListener('mousemove', onMouseMove)

//     image1.onmouseup = function(){
//         document.removeEventListener('mousemove',onMouseMove)
//         image1.onmouseup = null;
//     }

//     image1.ondragstart = function(){
//         return false
//     }
// }

// //drag items
// let image1 = document.querySelector('.round')

// image1.addEventListener('dragstart',function(event){
//     var code = '<img src="img/adventure.jpg">'
//     event.dataTransfer.setData("Text", code);
// //     event.preventDefault();
// //     event.target.style.transform = 'scale(2)'
//     console.log(`drag: ${event.target}`)
// })

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//     }


//drop items
let image2 = document.querySelector('.rounded')
image2.addEventListener('drop',function(event){
    event.preventDefault();
    image2.innerHTML = event.dataTransfer.getData("Text");
    // image2.setAttribute('src', data)
    // event.target.appendChild(data); 
//     event.preventDefault();
    console.log(`drop: ${event.target}`)
})

// ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));


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

let contentPick = document.querySelector('.content-pick')
let destiny = document.querySelector('.destination')
contentPick.addEventListener('click', function(event){
    event.stopPropagation()
    console.log('content pick container clicked')
})

destiny.addEventListener('click', function(event){
    // event.stopPropagation()
    console.log('destiny container clicked')
})