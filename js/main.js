function obtenerValor() {
    let inputValor = document.getElementById('inputNumber').value;
    console.log(inputValor);
    var numeber = 4;
    document.getElementById("resultado").innerHTML = inputValor;
}
function capturaDato (){
    var inputDato = document.getElementById('inputNumber').value;
    if(inputDato ==''){
        alert("Debe ingresar un numero");
        document.getElementById('inputNumber').focus();
    }else{
        if(inputDato % 7 === 0){
            var resultado = document.getElementById('resultado').innerHTML = inputDato;
            var divisible = document.getElementById('divisible').innerHTML = " Es divisible";
            console.log('Es divisible');
        }else{
            var divisible = document.getElementById('divisible').innerHTML = " No es divisible";
            console.log('No es divisible');
        }
        document.getElementById('inputNumber').value='';
        document.getElementById('inputNumber').focus();
        console.log(inputDato);
    }
    
}