   function Exemplo(){ 
    // document.write("escrevendo na tela");

    // document.getElementById("mensagem").innerText = "Escrevendo na tela"; 

    document.getElementById("mensagem").innerHTML = "<b>Escrevendo na tela</b>";

    document.getElementById("numero").value = "teste";

    console.log(document.getElementById("mensagem").innerHTML);

    let numero = document.getElementById("numero").value;
    console.log(numero);
   }

   function Trocar(){
       let numero = document.getElementById("numero").value;

        if(numero<20){
            document.getElementById("mensagem").innerText = "Menor que 20";
        }
        else if(numero == 20){
            document.getElementById("mensagem").innerText = "Igual a 20";
        }
        else{
            document.getElementById("mensagem").innerText = "Maior que 20";
        }

   }

