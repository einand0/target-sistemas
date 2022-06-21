function fibonacci(valor){

    var fbn1 = 0;
    var fbn2 = 1;
    var proximo = 1;

    var resultado = [fbn1, fbn2];

    for(i=0; i < valor;i++){
        proximo = fbn1 + fbn2;
        fbn1 =  fbn2;
        fbn2 = proximo;
        resultado.push(proximo);
    }

    console.log(resultado);

    function verifica(valor) {
        resultado.includes(valor) ? console.log("O valor pertence a sequência") : console.log("O valor não pertence a sequência");
    }
    verifica(valor);

}

fibonacci(13);
