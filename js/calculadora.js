function somar(){
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    let  msgError = document.getElementsByClassName('error');
    //Validação negada 
    if(!validacao(n1, n2)) {
        //Exibe erro
        msgError[0].innerHTML = "Um ou mais campos na soma não foram preenchidos";
    } else {
        //Faz o cálculo
        resultado= Number.parseInt(n1) + Number.parseInt(n2);

        document.getElementById('result').value = resultado;
        msgError[0].innerHTML = "";
    }
}

function subtracao(){
    n1 = document.getElementById('n1_sub').value;
    n2 = document.getElementById('n2_sub').value;

    let  msgError = document.getElementsByClassName('error');
    if(!validacao(n1, n2)) {
        msgError[1].innerHTML = "Um ou mais campos na subtração não foram preenchidos";
    } else {
        resultado = Number.parseInt(n1) - Number.parseInt(n2);
    
        document.getElementById('result_sub').value = resultado;
        msgError[1].innerHTML = "";
    }
}

function multiplicar() {
    n1 = document.getElementById('n1_mul').value;
    n2 = document.getElementById('n2_mul').value;

    let  msgError = document.getElementsByClassName('error');
    if(!validacao(n1, n2)) {
        msgError[2].innerHTML = "Um ou mais campos na multiplicação  não foram preenchidos";
    } else {
        resultado = Number.parseInt(n1) * Number.parseInt(n2);

        document.getElementById('result_mul').value = resultado;
        msgError[2].innerHTML = "";
    }
}

function dividir() {
    n1 = document.getElementById('n1_div').value;
    n2 = document.getElementById('n2_div').value;

    let  msgError = document.getElementsByClassName('error');
    if(!validacao(n1, n2)) {
        msgError[3].innerHTML = "Um ou mais campos na divisão  não foram preenchidos";
    } else {
        resultado = Number.parseInt(n1) / Number.parseInt(n2);

        document.getElementById('result_div').value = resultado;
        msgError[3].innerHTML = "";
    }    
}

function media() {
    n1 = document.getElementById('n1_med').value;
    n2 = document.getElementById('n2_med').value;
    n3 = document.getElementById('n3_med').value;

    let  msgError = document.getElementsByClassName('error');
    if(!validacaoMedia(n1, n2, n3)) {
        msgError[4].innerHTML = "Um ou mais campos na média  não foram preenchidos";
    } else {
        resultado = (Number.parseInt(n1) + Number.parseInt(n2) + Number.parseInt(n3)) / 3;

        document.getElementById('result_med').value = resultado;
        msgError[4].innerHTML = "";
    }
}

function limpar() {
    inputs_text = document.getElementsByClassName('form');
    for(i = 0; i < inputs_text.length; i++) {
        inputs_text[i].value = "";
    }
}

function limpa_array() {
    let inputs_text  = document.getElementsByClassName('form');
    for(input in inputs_text) {
        inputs_text[input].value = "";
    }
}

function limpa_for_each () {
    let inputs_text = document.getElementsByClassName('form');
    let inputs_array = Array.prototype.slice.call(inputs_text);
    inputs_text.forEach(function(e){
        e.value = '';
    });
}
function validacao(n1, n2) {
    //Se n1 for vazio, retorna erro
    //|| é o mesmo que OR
    if((n1.trim() === "" || n2.trim() === "")) {
        return false;
    } else {
        return true;
    }
}

function validacaoMedia(n1, n2, n3) {
    if(n1.trim() == "" || n2.trim() == "" || n3.trim() == "") {
        return false;
    } else {
        return true;
    }
}

function example_loop() {
    let loop = document.getElementById('loop');
    let msg_loop = "";
    for(i = 0; i < 10; i++) {
        msg_loop += '<p>' + i + '< 10</p>';
    }   
    
    loop.innerHTML = msg_loop;
}