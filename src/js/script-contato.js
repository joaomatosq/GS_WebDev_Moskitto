//Definindo variáveis para mudar a "cor" do background
const roxo = document.getElementById("roxo"); 
const imagemRoxa = "URL('/src/assets/background-image-roxo.png')";

//Definindo variáveis para mudar a "cor" do background
const verde = document.getElementById("verde");
const imagemVerde = "URL('/src/assets/background-image-verde.png')";

//Definindo variáveis para mudar a "cor" do background
const preto = document.getElementById("preto");
const imagemPreto = "URL('/src/assets/background-image-preto.png')";


const imagemOriginal = "URL('/src/assets/background-image1.jpg')";
let imagemAtiva = imagemOriginal;

roxo.addEventListener("click", function(evento) {
    evento.preventDefault(); 

    if (imagemAtiva === imagemOriginal) {
        document.body.style.backgroundImage = "URL('/src/assets/background-image-roxo.png')";
        imagemAtiva = imagemRoxa;
    } 
    else if(imagemAtiva === imagemVerde || imagemAtiva === imagemPreto){
        document.body.style.backgroundImage = "URL('/src/assets/background-image-roxo.png')";
        imagemAtiva = imagemRoxa; 
    }
    else {
        document.body.style.backgroundImage = "URL('/src/assets/background-image1.jpg')";
        imagemAtiva = imagemOriginal; 
    }
});


verde.addEventListener("click", function(evento) {
    evento.preventDefault(); 

    if (imagemAtiva === imagemOriginal || imagemAtiva === imagemRoxa) {
        document.body.style.backgroundImage = "URL('/src/assets/background-image-verde.png')";
        imagemAtiva = imagemVerde;
    } 
    else if (imagemAtiva == imagemPreto){
        document.body.style.backgroundImage = "URL('/src/assets/background-image-verde.png')";
        imagemAtiva = imagemVerde; 
    }
    
    else {
        document.body.style.backgroundImage = "URL('/src/assets/background-image1.jpg')";
        imagemAtiva = imagemOriginal; 
    }
});


preto.addEventListener("click", function(evento) {
    evento.preventDefault(); 

    if (imagemAtiva === imagemOriginal || imagemAtiva === imagemRoxa || imagemAtiva === imagemVerde) {
        document.body.style.backgroundImage = "URL('/src/assets/background-image-preto.png')";
        imagemAtiva = imagemPreto;
    } 
    else {
        document.body.style.backgroundImage = "URL('/src/assets/background-image1.jpg')";
        imagemAtiva = imagemOriginal; 
    }
});


document.getElementById("cadastro").addEventListener("submit", function(event) {
event.preventDefault();  // Impede o envio do formulário (para validação)

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const idade = document.getElementById("idade").value;
const telefone =  document.getElementById("telefone").value;

        if (!nome || !email || !idade ||!telefone) {
            document.getElementById("mensagem").textContent = "Todos os campos são obrigatórios!";
            document.getElementById("mensagem").style.color = "red";
            return; 
        }
        
        alert("Parabéns!!! seu cadastro foi concluído :)");
    
});
