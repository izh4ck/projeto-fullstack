function enviarDados() {

    
const dados = {
     titulo: document.getElementById('titulo').value,
     genero: document.getElementById('genero').value,
     autor: document.getElementById('autor').value,
     ano: document.getElementById('ano').value,
     nota: document.getElementById('nota').value

}



    axios.post('http://localhost:8080/posts', { dados })
        .then(response => {
            console.log('Dados enviados com sucesso:', response.data);
            alert('Dados enviados com sucesso!');
        })
        .catch(error => {
   
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados.');
        });
}