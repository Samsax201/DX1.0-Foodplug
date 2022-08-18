// es5 function declaration

var hamb = document.querySelector('.hamburger-menu')
var moblielinks = document.querySelector('.mobile_link-holder')
var backdrop = document.querySelector('.backdrop')
function addclass(){
    hamb.classList.toggle('show')
    moblielinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}