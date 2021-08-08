const email_input=document.querySelector('#email')
const pwd_input=document.querySelector('#pwd')
const email_span=document.querySelectorAll('.email-span')
const pwd_span=document.querySelectorAll('.pwd-span')

email_input.addEventListener('focusin',function () {
    email_input.style.borderBottomColor='#add8e6'
    for (let i = 0; i < email_span.length; i++) {
        email_span[i].style.color='#add8e6';
        email_span[i].style.transform='translateY(-30px)'
    }
})
email_input.addEventListener('focusout',function () {
    if (email_input.value==''){
        email_input.style.borderBottomColor='#f0f0f0'
        for (let i = 0; i < email_span.length; i++) {
            email_span[i].style.color='#f0f0f0';
            email_span[i].style.transform='translateY(0px)'
        }
    }

})
pwd_input.addEventListener('focusin',function () {
    pwd_input.style.borderBottomColor='#add8e6'
    for (let i = 0; i < pwd_span.length; i++) {
        pwd_span[i].style.color='#add8e6';
        pwd_span[i].style.transform='translateY(-30px)'
    }
})
pwd_input.addEventListener('focusout',function () {
    if (pwd_input.value==''){
        pwd_input.style.borderBottomColor='#f0f0f0'
        for (let i = 0; i < pwd_span.length; i++) {
            pwd_span[i].style.color='#f0f0f0';
            pwd_span[i].style.transform='translateY(0px)';


        }
    }

})