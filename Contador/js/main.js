var botao = document.querySelectorAll('.botao');
var numeroVisor = document.getElementById('numero');
var numero = 0;
console.log(numeroVisor);

for(let i = 0; i < botao.length; i++){

    botao[i].addEventListener('click', function(){


        if(this.value == '+'){
            aumentar();
        }
        if(this.value == '-'){
            diminuir();
        }

    })

}

function aumentar(){

    numero = numero + 1;
    
    numeroVisor.innerHTML = numero;

}

function diminuir(){
    if(numero > 0){
        numero = numero - 1;
    }
    
    numeroVisor.innerHTML = numero;

}