function Exemplo4(){ 


    document.getElementById("mensagem").innerHTML = "<b>Escrevendo na tela</b>";

    document.getElementById("numero").value = "teste";

    console.log(document.getElementById("mensagem").innerHTML);

    let numero = document.getElementById("numero").value;
    console.log(numero);
   }

   function Trocar(){
       let numero = document.getElementById("numero").value;

        if(numero < 18){
            document.getElementById("mensagem").innerText = "Menor";
        }
        else{
            document.getElementById("mensagem").innerText = "Maior";
        }

   }