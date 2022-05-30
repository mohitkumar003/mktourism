const trigger2 = document.querySelector('#triggerSignup');
const modalWrapper2 = document.querySelector('.modal__wrapper2');
const closeBtn2 = document.querySelector('.close2');

trigger2.addEventListener('click', function(){
     openModal2();
})

closeBtn2.addEventListener('click', function(){
    closeModal2(); 
})

modalWrapper2.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal2(); 
}) 

function openModal2()
{
    modalWrapper2.classList.add('active');
}
function closeModal2()
{
    modalWrapper2.classList.remove('active'); 
}