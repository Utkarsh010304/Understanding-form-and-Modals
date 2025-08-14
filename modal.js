const modal=document.querySelector('#modal');
const openModalbtn=document.querySelector('#open-modal-btn');
const closeModalbtn=document.querySelector('#close-modal-btn');
const overlay=document.querySelector('#overlay');

openModalbtn.addEventListener('click',()=>{
    modal.classList.add('open');
    overlay.classList.add('open');
})
closeModalbtn.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
function closeModal(){
    modal.classList.remove('open');
    overlay.classList.remove('open');
}