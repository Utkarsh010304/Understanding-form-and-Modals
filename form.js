const form=document.querySelector('#form');
const username=document.querySelector('#username');
const password=document.querySelector('#password');
const passConf=document.querySelector('#password-confirmation');
const terms=document.querySelector('#terms');
const errors=document.querySelector('.errors');
const errorList=document.querySelector('.error-list');
form.addEventListener("submit",e=>{
    const errorMsg=[];
    clearErrors();
    if(username.value.length < 6){
        errorMsg.push("Username must be at least 6 characters");
    }
    if(password.value.length < 10){
        errorMsg.push("Password must be at least 10 characters");
    }
    if(passConf.value!=password.value){
        errorMsg.push("Password must match");
    }
    if(!terms.checked){
        errorMsg.push("You must accept the terms");
    }
    if(errorMsg.length>0){
        e.preventDefault();
        showErrors(errorMsg);
    }
})
function clearErrors(){
    while(errorList.children[0]!=null){
        errorList.removeChild(errorList.children[0]);
    }
    errors.classList.remove('show');
}
function showErrors(errorMsg){
    errorMsg.forEach(errorMsgs => {
        const li=document.createElement('li');
        li.innerText=errorMsg;
        errorList.appendChild(li);
    });
    errors.classList.add("show");
}