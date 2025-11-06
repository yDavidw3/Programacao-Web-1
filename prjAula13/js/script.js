var nome = document.querySelector("#nome");
var sobren = document.querySelector("#sobren");
var email = document.querySelector("#email");
var nasc = document.querySelector("#nasc");
var tel = document.querySelector("#tel");
var assunto = document.querySelector("#assunto");
var msg = document.querySelector("#msg");

var bot = document.querySelector("button");
var inf = document.querySelector("#inf");

bot.addEventListener('click',info);

function info(){
    inf.innerHTML = `
        <p> ${nome.value} </p>
        <p> ${sobren.value} </p>
        <p> ${email.value} </p>
        <p> ${nasc.value} </p>
        <p> ${tel.value} </p>
        <p> ${assunto.value} </p>
        <p> ${msg.value} </p>
    `
}