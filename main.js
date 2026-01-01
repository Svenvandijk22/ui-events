/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...




/* 1 frontend*/

 /* stap 1 oproepen document*/
let scalefrontend = document.querySelector('a[href="#frontend"]')

console.log (scalefrontend)

/* stap 2 event toevoegen*/
scalefrontend.addEventListener('click', scaleToggle)
scalefrontend.addEventListener('animationend', scaleToggle)


/* stap 3 */
function scaleToggle(){
  scalefrontend.classList.toggle('scale-up')
}

// andere optie
// scalefrontend.addEventListener('click', function () {
//   scalefrontend.classList.add('scale-up')
// })

// scalefrontend.addEventListener('animationend', function() {
//   scalefrontend.classList.remove('scale-up')
// })


/* 2 & */

let translateend = document.querySelector('a[href="#and"]')

translateend.addEventListener('click', leftright)

function leftright(){
  translateend.classList.toggle('movingleftright')
}



/* 3 shake */


let shakeanimation = document.querySelector('a[href="#development"]')

shakeanimation.addEventListener('dblclick', shaking)

function shaking(){
  shakeanimation.classList.toggle('shake')
}






/* 4 focus */


let focusanimationn = document.querySelector('a[href="#sprint-5"]')

focusanimationn.addEventListener('focus', colorchang)

function colorchang(){
  focusanimationn.classList.toggle('focusbutton')


}

/* 5 mouse over */

 let mouseoverr = document.querySelector('a[href="#fix"]')

 mouseoverr.addEventListener('pointerover', textchange )
 mouseoverr.addEventListener('pointerout', orgintext)

 function textchange(){

 mouseoverr.textContent = 'houdoe'
 }
function orgintext(){
   mouseoverr.textContent = 'fix'

}



/* 6 pointerout*/

let pointeroutthe = document.querySelector('a[href="#the"]')

pointeroutthe.addEventListener('pointerout', turningthe )

function turningthe (){

  pointeroutthe.classList.toggle('pointeroutanimation')

}


/* 7 flow */



let flipLink = document.querySelector('a[href="#flow"]')

flipLink.addEventListener("mousedown", flipDownHandler)
flipLink.addEventListener("mouseup", flipUpHandler)


function flipDownHandler() {
  flipLink.classList.add("flip")
}

function flipUpHandler() {
  flipLink.classList.remove("flip")
}

flipLink.addEventListener("animationend", function(){
  flipLink.classList.remove("flip")
})



/* 8 user */

let userLink = document.querySelector('a[href="#user"]')


document.addEventListener("keyup", function (event) {

  userLink.classList.remove("user-a", "user-h", "user-m")

  let letter = event.key.toLowerCase()


  userLink.classList.add("user-" + letter)
})











