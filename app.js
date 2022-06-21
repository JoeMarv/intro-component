const inputs = document.querySelectorAll('input')
const btn = document.querySelector('.claim')




inputs.forEach(function(input) {  
   btn.addEventListener('click', function() {
        const inputValue = input.value.trim()
        const img = input.parentElement.querySelector('.error-icon')
        const msg = input.parentElement.querySelector('.error-msg')
    
        console.log(img)

        if (inputValue === '') {
            input.classList.add('error')
            img.classList.add('error')
            msg.classList.add('error')
        } else {
            input.classList.remove('error')
            img.classList.remove('error')
            msg.classList.remove('error')
        }
   })
});
