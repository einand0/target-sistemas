const estados = [
    {
        estado: "SP",
        faturamento: 67836.43
    },
    {
        estado: "RJ",
        faturamento: 36678.66
    },
    {
        estado: "MG",
        faturamento: 29229.88
    },
    {
        estado: "ES",
        faturamento: 27165.48
    },
    {
        estado: "Outros",
        faturamento: 19849.53
    },
]


//CALCULANDO O FATURAMENTO TOTAL DOS ESTADOS

faturamentoTotal = 0;
var calculoFaturamentoTotal = estados.map(item => {
    faturamentoTotal = faturamentoTotal + item.faturamento;
})

console.log("Faturamento total:", faturamentoTotal);

//CALCULO DA PORCENTAGEM DE 1% EM RELAÇÃO AO TOTAL

var porcentagem = faturamentoTotal / 100;

//CALCULANDO A PORCENTAGEM DE CADA ESTADO

const porcentagens = estados.map(item => {
    var valoresPorcentagem = Math.round(item.faturamento / porcentagem);
    console.log(`O valor da porcentagem do estado ${item.estado} é de ${valoresPorcentagem}`)
})