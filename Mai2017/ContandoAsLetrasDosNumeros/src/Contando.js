
function getExtenso(numero) {
    return (regulares[numero] || irregulares[numero]).length;
}

function calcLengthInterval(numeroInicial, numeroFinal){
    var cont = 0;
    for(;numeroInicial<= numeroFinal; numeroInicial++){
        if (numeroInicial > 100 && numeroInicial % 100 !== 0 ){
           cont += getExtenso(numeroInicial % 100) + centenas[parseInt(numeroInicial/100) * 100].length + 1;
        } else {
        cont += getExtenso(numeroInicial);
        }
    } // cem cento e um
    return cont;
}
var centenas = {
    100: "cento",
    200: "duzentos",
    300: "trezentos",
    400: "quatrocentos",
    500: "quinhetos"
};
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