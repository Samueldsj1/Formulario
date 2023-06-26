var txtNota01 = document.getElementById("txtNota01");
var txtNota02 = document.getElementById("txtNota02");
var txtNota03 = document.getElementById("txtNota03");
var txtNota04 = document.getElementById("txtNota04");
var resultado = document.getElementById("txtResultado");


function calcular(){
    let n1 = Number(txtNota01.value);
    let n2 = Number(txtNota02.value);
    let n3 = Number(txtNota03.value);
    let n4 = Number(txtNota04.value);

    let media = n1+n2+n3+n4;
    resultado.value = media;
}

