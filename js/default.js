
const myFooter = document.createElement('footer')
const myHeader = document.createElement('header')

const myMain = document.querySelector('main')

const myBody = document.querySelector('body')
myBody.appendChild( myFooter )
myBody.insertBefore( myHeader, myMain )

//const myHeader = document.getElementById('my-header')

const anchor = document.querySelector('#my-section .spec-art > a')

const myArt = document.querySelector('#my-section .spec-art')

const myParagraf = document.querySelector('.my-p')
myParagraf.innerHTML = '<a href="#">Mon ancre dynamique</a>'

console.log( myArt.children )

console.log( anchor )
