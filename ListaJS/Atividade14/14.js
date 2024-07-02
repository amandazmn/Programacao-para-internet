let displsy = document.querySelector("#tela");
let equacao = "0";
display.textContent = equacao;

function addEquacao(caracter){
    equacao+=caracter;
    display.textContent=equacao;
}

document.querySelectorAll(".teclaOP, .teclaChar").forEach(button => {
    button.addEventListener("click", ()=> {
        let caracter = button.innerHTML;
        if (caracter == "AC"){
            equacao = "";
            display.textContent = equacao;
        } else{
            addEquacao(caracter);
        }
    })
});

document.querySelector("#bntequal").addEventListener("click", ()=>{
    display.textContent=eval(equacao);
})
