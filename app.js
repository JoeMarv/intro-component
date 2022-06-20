const form = document.querySelector('.sign')
const fName = document.querySelector('.fname')
const lName = document.querySelector('.lname')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

form.addEventListener('submit', e => {
    e.preventDefault();

    var fNameValue = fName.value.trim()
    var lNameValue = lName.value.trim()
    var emailValue = email.value.trim()
    var passwordValue = password.value.trim()

    //error add

    if(fNameValue === '') {
        fName.parentElement.classList.add('error')
    }

    if(lNameValue === '') {
        lName.parentElement.classList.add('error')
    }

    if(emailValue === '') {
        email.parentElement.classList.add('error')
    }

    if(passwordValue === '') {
        password.parentElement.classList.add('error')
    }
})