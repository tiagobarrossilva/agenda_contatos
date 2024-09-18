
function excluirUsuario(){
    const id = document.getElementById("modalId").innerHTML
    
    let url = 'http://localhost:3000/excluir/'+id

    fetch(url,{method: "DELETE",})
        .then(data => {
            console.log(data)
            window.location.reload(true);
        })
        .catch(error => {
            console.error('Erro:', error)
        }
    )
}

function alterarValorModal(id,nome){
    document.getElementById("modalId").innerHTML = id
    document.getElementById("modalNome").innerHTML = nome
}