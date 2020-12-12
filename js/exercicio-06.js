function CalculadoraMoney(){
    let real = document.getElementById("real").value;
    let dolar = document.getElementById("dolar").value;

    let conversor = real * dolar;
    console.log(conversor);

    document.getElementById("mensagem").innerText = real + "*" + dolar + "=" + conversor;

    

}