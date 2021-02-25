// variables
const sendBtn = document.querySelector('#sendBtn')
const email = document.querySelector('#email')
const subject = document.querySelector('#subject')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#resetBtn')
const form = document.querySelector('#email-form')

// eventListeners
eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit)
    message.addEventListener('blur', validateField)
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    resetBtn.addEventListener('click', resetFields)
    form.addEventListener('submit', sendForm)
}




// functions
function sendForm(e) {
    e.preventDefault()
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'block'
    const sent=document.createElement('img')
    sent.src='../img/mail.gif'
    sent.style.display='block'
    const parent=document.querySelector('#loaders')
    setTimeout(() => {
        spinner.style.display = 'none'
        parent.appendChild(sent)
        setTimeout(() => {
            sent.style.display = 'none'
            resetFields()
        }, 4000);
    }, 3000);
}
function appInit() {
    sendBtn.disabled = true
}
function validateField() {
    if (this.type === 'email') {
        validateEmail(this)
    }
    else {
        validateLenght(this)
    }
    let err = document.querySelectorAll('.error')
    if (email.value !== '' && message.value !== '' && subject.value !== '' && err.length === 0) {

        sendBtn.disabled = false
    }
    else {
        sendBtn.disabled = true
    }
}
function validateLenght(field) {
    // console.log(field.value.length)
    if (field.value.length > 0) {
        field.style.borderBottomColor = "green"
        field.classList.remove('error')
    }
    else {
        field.style.borderBottomColor = "red"
        field.classList.add('error')
    }
}
function validateEmail(field) {

    if (field.value.length > 8 && field.value.includes('@')) {
        field.style.borderBottomColor = "green"
        field.classList.remove('error')
    }
    else {
        field.style.borderBottomColor = "red"
        field.classList.add('error')
    }
}
function resetFields() {
    email.value = ''
    email.style.borderBottomColor = "gray"
    subject.value = ''
    subject.style.borderBottomColor = "gray"
    message.value = ''
    message.style.borderBottomColor = "gray"
}