var teste = "Target Sistemas";

var resultado = [];


function reverterString(){
    for (i = 0; i < teste.length ; i++){
        resultado.unshift(teste.charAt(i));
    }

    var resultadoFinal = resultado.join("");
    console.log(resultadoFinal);
}

reverterString();