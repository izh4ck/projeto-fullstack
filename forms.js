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

async function consultar()
{
    // alert("em desenvolvimento");

    // const titulo=document.getElementById('titulo').value;
  
    try {
        const response = await axios.get('http://localhost:8080/posts'); // Substitua '/api/posts' pela URL da sua API
        const posts = response.data; // Os dados da API estão em response.data
    
        const tableBody = document.querySelector('#tabela_livro tbody');
    
        // Limpa a tabela antes de adicionar novos dados
        tableBody.innerHTML = '';
    
        // Adiciona cada post à tabela
        posts.forEach(post => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${post._id}</td>
            <td>${post.titulo}</td>
            <td>${post.genero}</td>
            <td>${post.autor}</td>
            <td>${post.ano}</td>
            <td>${post.nota}</td>
            <td>${post.resenha}</td>
          `;
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error('Erro ao listar posts:', error);  
      }
    
    
    // Chama a função listarPosts quando a página é carregada
    window.onload = consultar;

}

function limparFormulario(nome)
{
    document.getElementById(nome).reset();
}
