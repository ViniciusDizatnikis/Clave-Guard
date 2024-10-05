# Gerador de Senhas

<p>
Este projeto é um **Gerador de Senhas** desenvolvido para aprimorar minhas habilidades em HTML, CSS e JavaScript. Durante o processo de desenvolvimento, explorei diversas técnicas e funcionalidades dessas linguagens para criar uma interface intuitiva e responsiva que permite aos usuários gerar e copiar senhas de forma fácil e segura.
</p>

## Estrutura do Projeto

<p>O projeto está estruturado em três principais arquivos:</p>

- **`index.html`**: Estrutura HTML do gerador de senhas.
- **`styles.css`**: Estilo e aparência visual da página.
- **`script.js`**: Lógica JavaScript para a geração e manipulação das senhas.

### HTML

<p>O arquivo HTML (`index.html`) é responsável por definir a estrutura da página, incluindo:</p>

- **Cabeçalho (`<head>`)**: Contém o charset, o meta viewport para responsividade e links para o CSS e fontes do Google.
- **Corpo (`<body>`)**: Inclui os seguintes componentes principais:
  - **Logo do Gerador de Senhas**: Imagem representando o logo do gerador.
  - **Container de Entrada**: Elementos que permitem ao usuário definir o número de caracteres da senha e gerar uma nova senha.
  - **Container da Senha Gerada**: Área que exibe a senha sugerida, permite copiá-la e exibe uma mensagem de confirmação ao copiar.
  - **Rodapé (`<footer>`)**: Contém links para redes sociais e direitos autorais.

### CSS

<p>O arquivo CSS (`styles.css`) define o estilo visual do projeto, como cores, fontes, layout e animações:</p>

- **Estilos Gerais**: Configurações básicas de `padding`, `margin` e `box-sizing` são aplicadas para garantir uma aparência consistente.
- **Estilo dos Contêineres**: 
  - O container de entrada e o container da senha gerada foram estilizados para serem flexíveis e responsivos, garantindo uma boa experiência em diferentes dispositivos.
- **Slider Customizado**: O elemento `<input type="range">` (slider) foi estilizado para melhorar a aparência e usabilidade.
- **Animações**: Foram utilizadas animações para dar um efeito visual ao copiar a senha e ao exibir a confirmação de senha copiada.

### JavaScript

<p>O JavaScript (`script.js`) é responsável pela lógica de geração de senhas e pela interação com o usuário:</p>

- **Geração de Senhas (`generatePassword()`)**: Esta função gera uma senha com base na quantidade de caracteres definida pelo usuário, escolhendo aleatoriamente os caracteres disponíveis no charset.
- **Cópia da Senha (`copyPassword()`)**: Esta função copia a senha gerada para a área de transferência e exibe uma animação de confirmação.
- **Controle do Slider**: A quantidade de caracteres selecionada pelo usuário é exibida dinamicamente.

## Recursos Utilizados

<p>Este projeto utilizou as seguintes tecnologias e recursos:</p>

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização avançada com foco em responsividade e animações.
- **JavaScript**: Manipulação do DOM, geração de senhas aleatórias e interação com o usuário.

## Objetivos de Aprendizado

<p>Os principais objetivos deste projeto foram:</p>

- Aprimorar minhas habilidades em HTML, CSS e JavaScript.
- Praticar a manipulação do DOM e o uso de eventos JavaScript.
- Aprender a criar interfaces responsivas e dinâmicas.
- Aplicar animações para melhorar a experiência do usuário.

## Capturas de Tela

<p>(Adicione aqui capturas de tela do projeto em funcionamento.)</p>

## Como Executar o Projeto

<ol>
  <li>Clone o repositório: <code>git clone &lt;URL do repositório&gt;</code></li>
  <li>Navegue até a pasta do projeto: <code>cd gerador-de-senhas</code></li>
  <li>Abra o arquivo <code>index.html</code> em um navegador.</li>
</ol>

## Melhorias Futuras

<p>Algumas melhorias que podem ser implementadas no futuro:</p>

- Adicionar a opção de incluir caracteres especiais, números, letras maiúsculas/minúsculas conforme a preferência do usuário.
- Implementar validação de força da senha.
- Melhorar o design para dispositivos móveis.

---

<p>&copy; 2024 Vinicius Dizatnikis. Todos os direitos reservados.</p>
