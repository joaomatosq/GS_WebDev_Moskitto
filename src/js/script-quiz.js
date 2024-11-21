//Definindo variáveis para mudar a "cor" do background
const roxo = document.getElementById("roxo"); 
const imagemRoxa = "URL('./src/assets/background-image-roxo.png')";

//Definindo variáveis para mudar a "cor" do background
const verde = document.getElementById("verde");
const imagemVerde = "URL('./src/assets/background-image-verde.png')";

//Definindo variáveis para mudar a "cor" do background
const preto = document.getElementById("preto");
const imagemPreto = "URL('./src/assets/background-image-preto.png')";


const imagemOriginal = "URL('./src/assets/background-image1.jpg')";
let imagemAtiva = imagemOriginal;

roxo.addEventListener("click", function(evento) {
    evento.preventDefault(); 

    if (imagemAtiva === imagemOriginal) {
        document.body.style.backgroundImage = "URL('./src/assets/background-image-roxo.png')";
        imagemAtiva = imagemRoxa;
    } 
    else if(imagemAtiva === imagemVerde || imagemAtiva === imagemPreto){
        document.body.style.backgroundImage = "URL('./src/assets/background-image-roxo.png')";
        imagemAtiva = imagemRoxa; 
    }
    else {
        document.body.style.backgroundImage = "URL('./src/assets/background-image1.jpg')";
        imagemAtiva = imagemOriginal; 
    }
});


verde.addEventListener("click", function(evento) {
    evento.preventDefault(); 

    if (imagemAtiva === imagemOriginal || imagemAtiva === imagemRoxa) {
        document.body.style.backgroundImage = "URL('./src/assets/background-image-verde.png')";
        imagemAtiva = imagemVerde;
    } 
    else if (imagemAtiva == imagemPreto){
        document.body.style.backgroundImage = "URL('./src/assets/background-image-verde.png')";
        imagemAtiva = imagemVerde; 
    }
    
    else {
        document.body.style.backgroundImage = "URL('./src/assets/background-image1.jpg')";
        imagemAtiva = imagemOriginal; 
    }
});


preto.addEventListener("click", function(evento) {
    evento.preventDefault(); 

    if (imagemAtiva === imagemOriginal || imagemAtiva === imagemRoxa || imagemAtiva === imagemVerde) {
        document.body.style.backgroundImage = "URL('./src/assets/background-image-preto.png')";
        imagemAtiva = imagemPreto;
    } 
    else {
        document.body.style.backgroundImage = "URL('./src/assets/background-image1.jpg')";
        imagemAtiva = imagemOriginal; 
    }
});



const perguntas = [
    {
        pergunta: "Qual a unidade de energia dentro do Sistema Internacional (SI)?",
        respostas: ["kWh - quilowatt-hora", "J - Joule", "V - Volts", "W - Watts"],
        correta: 1 // índice da resposta correta
    },
    {
        pergunta: "Qual fonte sustentável utiliza o calor da terra como energia?",
        respostas: ["Solar", "Eólica", "Geotérmica", "Hidrelétrica"],
        correta: 2 // índice da resposta correta
    },
    {
        pergunta: "Quais das alternativas NÃO são fontes de energia limpa?",
        respostas: ["Carvão", "Solar", "Eólica", "Geotérmica"],
        correta: 0 // índice da resposta correta
    },
    {
        pergunta: "Qual gás é liberado durante a queima de combustíveis fósseis?",
        respostas: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Metano"],
        correta: 2 // índice da resposta correta
    },
    {
        pergunta: "Qual é a principal fonte de energia usada em usinas hidrelétricas?",
        respostas: ["Vento", "Água", "Solar", "Carvão"],
        correta: 1 // índice da resposta correta
    },
    {
        pergunta: "A energia solar é considerada uma energia renovável. Qual é sua principal vantagem?",
        respostas: ["Alta eficiência energética", "Emissão de gases poluentes", "Baixo custo de operação e manutenção", "Necessita de grandes áreas de terra"],
        correta: 2 // índice da resposta correta
    },
    {
        pergunta: "O que é energia eólica?",
        respostas: ["Energia gerada pelo calor da terra", "Energia gerada pela força do vento", "Energia gerada pela água", "Energia gerada pela decomposição de matéria orgânica"],
        correta: 1 // índice da resposta correta
    },
    {
        pergunta: "Qual é a principal fonte de emissão de gases de efeito estufa no setor de energia?",
        respostas: ["Energia solar", "Energia eólica", "Energia nuclear", "Combustíveis fósseis"],
        correta: 3 // índice da resposta correta
    },
    {
        pergunta: "O que caracteriza a biomassa como fonte de energia?",
        respostas: ["Utiliza materiais orgânicos como fonte de energia", "Utiliza minerais e metais", "É uma forma de energia não renovável", "Gera mais poluição do que energia solar"],
        correta: 0 // índice da resposta correta
    },
    {
        pergunta: "A energia geotérmica é produzida a partir de qual fonte?",
        respostas: ["Radiação solar", "Calor da terra", "Vento", "Água do mar"],
        correta: 1 // índice da resposta correta
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respostaSelecionada = null;  // Corrigido para 'respostaSelecionada'

function mostrarPergunta() {
    const perguntaElemento = document.getElementById("perguntas");
    const respostasElemento = document.getElementById("respostas");
    const perguntaObj = perguntas[perguntaAtual];

    // Define a pergunta
    perguntaElemento.textContent = perguntaObj.pergunta;

    // Limpa as respostas antigas
    respostasElemento.innerHTML = "";

    perguntaObj.respostas.forEach((resposta, index) => {
        const p = document.createElement("p");
        p.textContent = resposta;
        p.className = "resposta";
        p.onclick = () => selecionarResposta(index, p); // Passa o índice e o elemento clicado
        respostasElemento.appendChild(p);
    });
}

// Marca a resposta selecionada
function selecionarResposta(index, elemento) {
    respostaSelecionada = index;

    // Remove a classe 'selecionado' de todas as respostas
    const respostas = document.querySelectorAll(".resposta");
    respostas.forEach(r => r.classList.remove("selecionado"));

    // Adiciona a classe 'selecionado' à resposta clicada
    elemento.classList.add("selecionado");
}

// Avança para a próxima pergunta
function proximaPergunta() {
    if (respostaSelecionada === null) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return;
    }

    // Verifica se a resposta está correta
    if (respostaSelecionada === perguntas[perguntaAtual].correta) {
        pontuacao++;
    }

    // Avança para a próxima pergunta
    perguntaAtual++;

    // Reseta a seleção de resposta
    respostaSelecionada = null;

    if (perguntaAtual < perguntas.length) {
        // Exibe a próxima pergunta
        mostrarPergunta();
    } else {
        // Fim do quiz
        mostrarResultado();
    }
}

// Mostra o resultado final
function mostrarResultado() {
    const perguntaContainer = document.querySelector(".pergunta-container");
    const resultadoElemento = document.getElementById("resultado");
    const reiniciar = document.getElementById("botao");
    
    reiniciar.style.display = "none"   
    

    // Oculta a área de perguntas
    perguntaContainer.style.display = "none";

    // Mostra o resultado
    resultadoElemento.style.display = "block";
    resultadoElemento.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

// Inicializa a primeira pergunta
mostrarPergunta();
