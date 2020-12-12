function Testar(){
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value


    let resultado = parseFloat(numero1) + parseFloat(numero2);

    document.getElementById("resultado").innerText = numero1+ " + "+ numero2+ " = "+ resultado; 

}