var user = parseInt(prompt("Insira um número de 1-3: "));
const min = 1;
const max = 3;
const n = Math.floor(Math.random() * max) + min;

if (n == 1 && user == 1) {
    alert("Você jogou: Pedra. A máquina jogou: Pedra. Portanto, foi um empate!");
} else if (n == 2 && user == 2) {
    alert("Você jogou: Papel. A máquina jogou: Papel. Portanto, foi um empate!");
} else if (n == 3 && user == 3) {
    alert("Você jogou: Tesoura. A máquina jogou: Tesoura. Portanto, foi um empate!");
} else if (n == 1 && user == 2) {
    alert("Você jogou: Papel. A máquina jogou: Pedra. Você ganhou!");
} else if (n == 3 && user == 1) { 
    alert("Você jogou: Pedra. A máquina jogou: Tesoura. Você ganhou!"); 
} else if (n == 2 && user == 3) { 
    alert("Você jogou: Tesoura. A máquina jogou: Papel. Você ganhou!");
}else if (n == 2 && user == 1) { 
    alert("Você jogou: Pedra. A máquina jogou: Papel. Máquina ganhou!");
} else if (n == 1 && user == 3) { 
     alert("Você jogou: Tesoura. A máquina jogou: Pedra. Máquina ganhou!");
} else if (n == 3 && user == 2) { 
    alert("Você jogou: Papel. A máquina jogou: Tesoura. Máquina ganhou!");
}
