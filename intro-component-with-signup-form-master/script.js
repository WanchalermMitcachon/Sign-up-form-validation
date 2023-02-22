const form=document.getElementById('form')
const firstName=document.getElementById('first-name')
const lastName=document.getElementById('last-name')
const email=document.getElementById('email')
const password=document.getElementById('password')



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(firstName.value===''){
        showError(firstName,'Please input your first name.')

    }else
        showSuccess(firstName)
  
    if(lastName.value===''){
        showError(lastName,'Please input your last name.')

    }else
        showSuccess(lastName)
    if(email.value===''){
        showError(email,'Please input your email address.')
    }else if(!validateEmail(email)){
        showError(email,'Please input your email address correctly.')
        
    }else{
        showSuccess(email)
    }
    if(password.value===''){
        showError(password,'Please input your password.')

    }else{
        checkInputLength(password,8,16)

    }
    
})

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className=`form-control success`
    
}
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className=`form-control error`
    const small=formControl.querySelector('small')
    small.innerText=`${message}`
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function checkInputLength(input,min,max){
        if(input.value.length<=min){
            showError(input,`This must be al least 8 charaters`)
        }else if(input.value.length>=max){
            showError(input,`This must be less than 16 charaters`)
        }else{
            showSuccess(input)
        }
    }