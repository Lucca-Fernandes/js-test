let tarefas = [];

console.log(tarefas)
function adicionartarefa(){
    const descriçao = document.getElementById('descriçao').value.trim().split(',')
    tarefas.push({descriçao: descriçao,status:false})
    descriçao.value = '' // limpar o input
    renderizar()

}

function alternarstatus(indice){
    tarefas[indice].status = !tarefas[indice].status // alterna o status da check box
    renderizar()
}

function renderizar(){
    const listaTarefas = document.getElementById('listaTarefas') 
    listaTarefas.innerHTML = '' // Entra no elemento html para fazer modificaçoes 

    tarefas.forEach((tarefa,indice) => {
        const itemtarefa = document.createElement('li') // adiciona elemento li e sua respectiva classe
        itemtarefa.classList.add('item-tarefa')
        
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = tarefa.status
        checkbox.onclick = () => alternarstatus(indice)

        const label = document.createElement('label')
        label.classList.add('legenda')
        label.textContent = tarefa.descriçao
        if (tarefa.status){
            label.classList.add("concluida")
            checkbox.classList.add("concluida")
        }
        else{
            label.classList.add("nao-concluida")
            checkbox.classList.add("nao-concluida")
        }
        

        itemtarefa.appendChild(checkbox);
        itemtarefa.appendChild(label);
        listaTarefas.appendChild(itemtarefa);
    })
}



