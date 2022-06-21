const inputs = document.querySelectorAll('input')
const btn = document.querySelector('.claim')

inputs.forEach(function(input) {  
   btn.addEventListener('click', function() {
        const inputValue = input.value.trim()
        const main = input.parentElement
        const img = input.parentElement.querySelector('.error-icon')
        const msg = input.parentElement.querySelector('.error-msg')
        

        if (inputValue === '') {
            input.classList.add('error')
            main.classList.add('error')
            img.classList.add('error')
            msg.classList.add('error')
        } else {
            input.classList.remove('error')
            main.classList.remove('error')
            img.classList.remove('error')
            msg.classList.remove('error')
        }

        const mainClass = input.parentElement.classList.contains('error')
        
        if (mainClass !== true*4) {
            // alert('Sign Up Successful')
            location.reload()
        } 
   })  
});
