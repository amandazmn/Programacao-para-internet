var n = Number(prompt("Informe um número"));

if(n%2==0){
    window.document.write("O número " + n + " é par!");
    window.alert("O número " + n + " é par!");
    window.console.log("O número " + n + " é par!");
} else{
    window.document.write("O número " + n + " é ímpar!");
    window.alert("O número " + n + " é ímpar!");
    window.console.log("O número " + n + " é ímpar!");
}