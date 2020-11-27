let planetOne = document.querySelector('.planet-one');
let planetTwo = document.querySelector('.planet-two');
let planetThree = document.querySelector('.planet-three');

planetOne.addEventListener('click', function () {
    gsap.to('.planet-one img', {duration: 5, x: 450, y: -55, scale: 1.9, ease: "elastic"})
    gsap.to('.planet-two img', {duration: 5, x: -290, y: -220, scale: 0.3, ease: "elastic"})
    gsap.to('.planet-three img', {duration: 5, x:-300, y: 300, scale: 1.4, ease: "elastic"})
    
})


planetTwo.addEventListener('click', function () {
    gsap.to('.planet-one img', {duration: 3, x: 0, y: 0, scale: 1, ease: "elastic"})
    gsap.to('.planet-two img', {duration: 3, x: 0, y: 0, scale: 1, ease: "elastic"})
    gsap.to('.planet-three img', {duration: 3, x: 0, y: 0, scale: 1, ease: "elastic"})
    
})

planetThree.addEventListener('click', function () {
    gsap.to('.planet-one img', {duration: 3, x: 290, y: -340, scale: 0.7, ease: "elastic"})
    gsap.to('.planet-two img', {duration: 3, x: -500, y: 80, scale: 0.5, ease: "elastic"})
    gsap.to('.planet-three img', {duration: 3, x: 290, y: 220, scale: 2.3, ease: "elastic"})
    
})




/*planetTwo.addEventListener('mouseover', function () {
    gsap.to('.planet-two img', {duration: 5, x: -290, y: -220, scale: 0.38, ease: "elastic"})
})

planetTwo.addEventListener('mouseleave',function () {
    gsap.to('.planet-one img', {duration: 5, x: 0, y: 0, scale: 1, ease: "elastic"})
})


planetThree.addEventListener('mouseover', function () {

    gsap.to('.planet-three img', {duration: 5, x:-300, y: 300, scale: 1.6, ease: "elastic"})
})

planetThree.addEventListener('mouseleave',function () {
    gsap.to('.planet-three img', {duration: 5, x:0, y: 0, scale: 1, ease: "elastic"})
})
*/






//gsap.to('.planet-two img', {duration: 5, x: -290, y: -220, scale: 0.38, ease: "elastic"})
//gsap.to('.planet-three img', {duration: 5, x:-300, y: 300, scale: 1.6, ease: "elastic"})


