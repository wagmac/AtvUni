// Função para alterar o conteúdo exibido conforme a seção selecionada
function trocarConteudo(secao) {
    let conteudo = document.getElementById('conteudo');

    switch (secao) {
        case 'sobre':
            conteudo.innerHTML = `
                <h2>Sobre Mim</h2>
                <p>Olá! Meu nome é Wagner da Silva Macedo, sou desenvolvedor e apaixonado por tecnologia. No meu tempo livre, gosto de aprender sobre novas linguagens de programação e explorar o mundo da tecnologia.</p>
                <p>Hobbies: leitura, música, desenvolvimento de projetos pessoais e criação de impressões 3D.</p>
            `;
            break;

        case 'formacao':
            conteudo.innerHTML = `
                <h2>Formação</h2>
                <p>Bacharel em Ciência da Computação pela Universidade Uninter.</p>
                <p>Idiomas: Português (nativo), Inglês (avançado).</p>
                <p>Certificações: Curso de Desenvolvimento Web, Certificado em Data Science e Python.</p>
            `;
            break;

        case 'portfolio':
            conteudo.innerHTML = `
                <h2>Portfólio</h2>
                <p>Projetos que desenvolvi e colaborei:</p>
                <ul>
                    <li><a href="https://exemplo.com/projeto1" target="_blank">Projeto de Site para uma ONG</a></li>
                    <li><a href="https://exemplo.com/projeto2" target="_blank">Sistema de Monitoramento de Energia</a></li>
                    <li><a href="https://exemplo.com/projeto3" target="_blank">Aplicativo de Gerenciamento de Tarefas</a></li>
                </ul>
            `;
            break;

        case 'contato':
            conteudo.innerHTML = `
                <h2>Contato</h2>
                <form id="formContato">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" required></textarea>
                    
                    <button type="submit">Enviar</button>
                </form>
            `;
            break;

        default:
            conteudo.innerHTML = `<p>Seção não encontrada.</p>`;
    }
}
