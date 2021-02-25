// variables
const sendBtn=document.querySelector('#sendBtn')
const email=document.querySelector('#email')
const subject=document.querySelector('#subject')
const message=document.querySelector('#message')


// eventListeners
eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded',appInit)
    message.addEventListener('blur',validateField)  
    email.addEventListener('blur',validateField)
    subject.addEventListener('blur',validateField)
}




// functions
function appInit(){
    sendBtn.disabled=true
}
function validateField(){

}