
const btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', (evento) => {
    evento.preventDefault();
    try {
        criarElementos();
    } catch (error) {
        alert('Preencha o formulário');
    }
})

const criarElementos = () => {
    try {
        // Pegando valores dos campos e criando nova linha
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const interesse = document.getElementById('interesse').value;
        const tabela = document.querySelector('.tabela tbody');
        const newLinha = document.createElement('tr');


        // Verificando se todos os campos foram preenchidos
        if(!nome || !telefone || !email || !interesse) {
            throw new Error("Preencha todos os campos do formulário!");
        }

        // Verificando se o telefone já estava cadastrado
        const contatoCadastrado = [...(tabela.querySelectorAll('tr'))].map(contato => contato.cells[1].textContent);
        if(contatoCadastrado.includes(telefone)){
            alert("Esse contato já está cadastrado na sua lista de contatos!");
            return;
        }

        // Inserindo valores na tabela
        newLinha.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
            <td>${email}</td>
            <td>${interesse}</td>
        `

        tabela.appendChild(newLinha);

    } catch (error) {
        alert('Não é possível criar nova linha ou você não preencheu o formulário!');
    }
}