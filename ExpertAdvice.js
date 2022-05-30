const Asknow3 = document.querySelector('#Asknow');
const modalWrapper3 = document.querySelector('.modal__wrapper3');
const closeBtn3 = document.querySelector('.close3');

Asknow3.addEventListener('click', function(){
     openModal3();
})

closeBtn3.addEventListener('click', function(){
    closeModal3(); 
})

modalWrapper3.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal3(); 
}) 

function openModal3()
{
    modalWrapper3.classList.add('active');
}
function closeModal3()
{
    modalWrapper3.classList.remove('active'); 
}