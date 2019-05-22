// Your code goes here
// changed the background color of the header
const backGroundHeader = document.querySelector('.main-navigation');

backGroundHeader.setAttribute("style", "background-color: black; color: white; border: 1px solid black;");
//console.log(backGroundHeader)

// changed color of nav
const navigation = document.querySelectorAll('a')
console.log(navigation)
navigation[0].setAttribute('style', 'color: white;')
navigation[1].setAttribute('style', 'color: white;')
navigation[2].setAttribute('style', 'color: white;')
navigation[3].setAttribute('style', 'color: white;')

// navigation.addEventListener('mouseover', navColor => {
// navigation.style.color = 'blue'
// })
/// mouse over
const containerHeader = document.querySelector('.main-navigation')
containerHeader.addEventListener('mouseover', event => {
    containerHeader.style.backgroundColor = 'rgb('+event.offsetX+','+event.offsetY+', 50)';
});
/// key down
const containerBody = document.querySelector('body')
containerBody.addEventListener('keydown', homeEvent => {
    console.log(`Go easy on the keys: ${homeEvent.key}`)
});
/// wheel
//containerHeader.addEventListener('wheel', navEvent => {
//console.log(`this is my nav event: ${navEvent}`)
//})
/// prevent default
const nav = document.querySelector('.nav')
nav.addEventListener('click', navEvent =>{
    navEvent.preventDefault();
    navEvent.stopPropagation();

});
/// window
window.addEventListener('click', windowEvent =>{
    alert(`you should never see this when clicking the nav bar`)
})
/// double click
const logoLarge = document.querySelector('.logo-heading');
console.log(logoLarge);

logoLarge.addEventListener('dblclick', e => {
    logoLarge.style.fontSize = '8rem';
});
/// load
window.addEventListener('load', loadPage => {
    alert(` Welcome to fun bus`)
})
///
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.setAttribute('draggable', true);
    button.ondrag = (event) => {
        button.textContent = 'Whats up I am being dragged';
    };
})
const imgContent = document.querySelector('.img-content')
console.log(imgContent)
imgContent.addEventListener('focus', eventImg => {
    eventImg.style.background = 'pink'; 
}, true)
imgContent.addEventListener('blur', (eventImg) => {
    eventImg.style.background = 'blue';  
}, true)




