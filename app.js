let amigos = [];
limparTudo();

function adicionarAmigo(){
 let nomeDeAmigo = document.querySelector('input').value;
 if(nomeDeAmigo == ''){
    alert('Entrada inválida. Insira um nome!');
 } else{
    amigos.push(nomeDeAmigo);
    limparCampo();
    atualizarLista();
 }
}

//limpa o campo de entrada de amigos
function limparCampo(){
    let limpe = document.querySelector('input');
    limpe.value = '';
}

//atualiza a array de amigos
//li = item list; é um elemento HTML usado para marcar cada item em uma lista.
function atualizarLista(){
    let listaAtt = document.getElementById('listaAmigos');
    listaAtt.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAtt.appendChild(li);
    });
    }

//verificamos se há amigos disponíveis para sorteio
function sortearAmigo(){
    if(amigos.length < 2){
        document.getElementById('resultado').innerHTML = 'Sem pessoas o bastante para sorteio.';
        return;
    } else{
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoEscolhido =  amigos[indice]; 

        // Remover o amigo sorteado da lista 
        amigos.splice(indice, 1);

        //mostrar o resultado
        document.getElementById('resultado').innerHTML = `O amigo sorteado foi ${amigoEscolhido}`; 

        atualizarLista(); // Atualiza a lista após remover o amigo sorteado

}
}


function limparResultadoLista() {
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado
    setTimeout(() => {
        document.getElementById('resultado').innerHTML = ''; // Limpa novamente após 5 segundos
    }, 5000);
}

function limparTudo() {
    amigos = []; // Limpa o array de amigos
    limparCampo(); // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista exibida (que ficará vazia)
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado do sorteio
}