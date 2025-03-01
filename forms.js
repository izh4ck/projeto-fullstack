function enviarDados() {

    
const dados = {
     titulo: document.getElementById('titulo').value,
     genero: document.getElementById('genero').value,
     autor: document.getElementById('autor').value,
     ano: document.getElementById('ano').value,
     nota: document.getElementById('nota').value,
     resenha: document.getElementById('resenha').value

}



    axios.post('http://localhost:8080/posts', dados)
        .then(response => {
            console.log('Dados enviados com sucesso:', response.data);
            alert('Dados enviados com sucesso!');
            limparFormulario();
        })
        .catch(error => {
   
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados.');
        });
}

function limparFormulario()
{

    document.getElementById('titulo').value="";
    document.getElementById('genero').value="";
    document.getElementById('autor').value="";
    document.getElementById('ano').value="";
    document.getElementById('nota').value="";
    document.getElementById('resenha').value="";

}