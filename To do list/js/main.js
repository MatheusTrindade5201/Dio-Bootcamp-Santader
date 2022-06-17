var listaTarefas = document.querySelector('.lista-afazeres');
console.log(listaTarefas);

var incluir = document.querySelector('.botao-incluir');

listaTarefas.addEventListener('dblclick', function(event){

    event.target.classList.add('desaparecer');

    setTimeout(function(){

        event.target.parentNode.remove();

    }, 100)
    
})

incluir.addEventListener('click', function(){
    var textoTarefa = document.getElementById('tarefa');

    if(textoTarefa.value != ''){
        incluirTarefa();
    }
})

var numeroTarefa = 1;

function incluirTarefa(){

    var lista = novoLi();
    var tarefa = novaTarefa();
    var label = novoLabel();

    listaTarefas.appendChild(lista);
    lista.appendChild(tarefa);
    lista.appendChild(label);

    
    var textoTarefa = document.getElementById('tarefa');

    textoTarefa.value = '';

    numeroTarefa++;

    
}

function novaTarefa(){

    var novaTarefa = document.createElement('input');
    novaTarefa.id = numeroTarefa;
    novaTarefa.type = 'checkbox';

    return novaTarefa;

}

function novoLabel(){
    
    var label = document.createElement('label');
    label.htmlFor = numeroTarefa;
    label.innerHTML = tarefa();

    return label;

}

function novoLi(){

    var lista = document.createElement('li');
    lista.classList.add(numeroTarefa);

    return lista;

}

function tarefa(){

    var textoTarefa = document.getElementById('tarefa').value;

    return textoTarefa;
}


