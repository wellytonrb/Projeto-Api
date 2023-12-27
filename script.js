function obterDados(){
    const url = 'https://reqres.in/api/users'
    let req = new XMLHttpRequest() /* Requisição */
    req.open('GET', url) /* Metodo "post" para usar com senhas */
    req.responseType = 'json'
    req.send()
    req.onload = function(){
        let users = req.response
        exibirDdados(users)
    }
}   

function exibirDdados(JsonObj){
    let usuarios = JsonObj.data 
    usuarios.forEach(element => {
        document.body.innerHTML += "<br/>"; 
        document.body.innerHTML += `ID:${element.id} </br>`; 
        document.body.innerHTML += `Nome:${element.first_name}`;
        document.body.innerHTML += "<br/>"; 
    })
}

function enviarDados() {
    const form = document.getElementById('formuser');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    document.body.innerHTML += "<br/>";
    document.body.innerHTML += "Cadastro Realizado ";
    document.body.innerHTML += "<br/>";
    document.body.innerHTML += data.nome + "<br/>";
    document.body.innerHTML += data.idade + "<br/>";

    fetch('https://reqres.in/api/users', { 
        method: 'POST',
        headers: {
           // 'Content-Type': 'application/json', // Adicionado o cabeçalho Content-Type
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error)); // Adicionado um tratamento de erro
}


obterDados();