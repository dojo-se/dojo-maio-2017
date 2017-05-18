
function getExtenso(numero) {
    if(regulares[numero]){
        return (regulares[numero]).length;
    } else if(irregulares[numero]){
        return (irregulares[numero]).length;
    }
}

function calcLengthInterval(numeroInicial, numeroFinal){
    var cont = 0;
    for(;numeroInicial<= numeroFinal; numeroInicial++){
        cont += getExtenso(numeroInicial)
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
   30: "trinta",
   40: "quarenta",
   50: "cinquenta",
   60: "sessenta",
   70: "setenta",
   80: "oitenta",
   90: "noventa"
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