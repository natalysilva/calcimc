document.querySelector("#botao").onclick= Registrar;
function Registrar(){
    var nome=document.getElementById("nome").value;
    var altura=document.getElementById("altura").value;
    var peso=document.getElementById("peso").value;

    var resultado=document.getElementById("tabela");
    

    var imcp=0;
    var imcalt=0;
    altura=parseFloat(altura);
    peso=parseFloat(peso);
    
    var divalt=parseFloat(imcalt/100);
    var imc=number(imcp/(imcalt*imcalt));
    }
    