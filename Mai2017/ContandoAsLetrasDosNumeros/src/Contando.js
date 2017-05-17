
function getExtenso(numero) {
    return (regulares[numero]).length;
}

function calcLengthInterval(numeroInicial, numeroFinal){
    var cont = 0;
    for(;numeroInicial<= numeroFinal; numeroInicial++){
        cont +=getExtenso(numeroInicial)
    }
    return cont;
}

regulares = {
   1: "um",
   2: "dois",
   3: "três",
   4: "quatro",
   5: "cinco",
   6: "seis",
   7: "sete",
   8: "oito",
   9: "nove",
   10: "dez",
   20: "vinte",
};

irregulares = {
    11: "onze",
    12: "doze",
    13: "treze",
    14: "catorze",
    15: "quinze",
    16: "dezesseis",
    17: "dezessete",
    18: "dezoito",
    19: "dezenove",
    100: "cem"
};

module.exports = calcLengthInterval; 