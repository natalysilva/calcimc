document.querySelector("#botao").onclick= Registrar;
function Registrar(){
    var nome=document.getElementById("nome").value;
    var altura=document.getElementById("altura").value;
    var peso=document.getElementById("peso").value;

    var resultado=document.getElementById("tabela");
    
    altura=parseFloat(altura);
    peso=parseFloat(peso);
    
    var divalt=parseFloat(altura/100);
    var imc=number(peso/(altura*altura));
}