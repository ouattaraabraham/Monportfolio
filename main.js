const div1= document.querySelector('#div1') ;
const divpage1= document.getElementById('divpage1') ;



const changeComponent=(e)=>{
        console.log('toucher ' , e);
        divpage1.style.display='block'
}
const changeCom=(e)=>{
    console.log('deuxiem touche ' , e);
   
}
div1.addEventListener('mouseover', changeCom)
div1.addEventListener('click', changeComponent)


