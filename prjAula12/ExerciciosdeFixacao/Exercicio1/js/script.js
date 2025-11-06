alert("Seja bem-vindo(a) ao programa que calcula o seu salário atual com a procentagem de aumento que você recebeu. Digite 'OK' para prossegui.");

var sal = parseFloat(prompt("Insira seu salário atual: "));
var por = parseInt(prompt("Insira a porcentagem a ser acressida: "));
var porce = parseFloat;
var total = parseFloat;

porce = por/100 * sal;
total = porce + sal;

alert("O seu novo salário é de: "+total.toFixed(2));