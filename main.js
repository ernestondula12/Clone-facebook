
let closeButtons = document.querySelectorAll('.caixa-usuario-fechamento');

for(let i=0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click',()=>{

        closeButtons[i].parentNode.style.display= "none";
        
    })
}