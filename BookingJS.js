const trigger4 = document.querySelector('#BookNow');
const modalWrapper4 = document.querySelector('.modal__wrapper4');
const closeBtn4 = document.querySelector('.close4');

trigger4.addEventListener('click', function(){
     openModal4();
})

closeBtn4.addEventListener('click', function(){
    closeModal4(); 
})

modalWrapper4.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal4(); 
}) 

function openModal4()
{
    modalWrapper4.classList.add('active');
}
function closeModal4()
{
    modalWrapper4.classList.remove('active'); 
}