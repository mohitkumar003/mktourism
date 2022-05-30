const trigger = document.querySelector('#triggerLogin');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
     openModal();
})

closeBtn.addEventListener('click', function(){
    closeModal(); 
})

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal(); 
}) 

function openModal()
{
    modalWrapper.classList.add('active');
}
function closeModal()
{
    modalWrapper.classList.remove('active'); 
}
