

/*Evento no qual ao clicar em "Moskitto Energy" acontece a animação*/
window.addEventListener('click', function() {
    const link = document.getElementById('link-home');
    //Adiciona a classe para animar o titulo ao clicar nele
    link.classList.add('move-up'); 
    aparecerMenu();
    desaparecerSubtitulo();
});
function aparecerMenu(){
    const menu1 = document.getElementById('menu');
    menu1.classList.add('aparecer'); 
}


//Criando o script para abrir a seção de "Sobre" com fade-out
const sobre = document.getElementById("link-sobre");
sobre.addEventListener("click", function(evento){
    evento.preventDefault();
    const link = this;
    // Adiciona a classe que faz o link desaparecer (fade out)
    link.classList.add('fade-out-sobre');
    setTimeout(function() {
        window.location.href = "sobre.html";  
    }, 1000); 
})


//Criando o script para abrir a seção de "Quiz" com fade-out
const quiz = document.getElementById("link-quiz");
quiz.addEventListener("click", function(evento){
    evento.preventDefault();
    const link = this;
    // Adiciona a classe que faz o link desaparecer (fade out)
    link.classList.add('fade-out-quiz');
    setTimeout(function() {
        window.location.href = "quiz.html";  
    }, 1000); 
})


//Criando o script para abrir a seção de "Contato" com fade-out
const contato = document.getElementById("link-contato");
contato.addEventListener("click", function(evento){
    evento.preventDefault();
    const link = this;
    // Adiciona a classe que faz o link desaparecer (fade out)
    link.classList.add('fade-out-contato');
    setTimeout(function() {
        window.location.href = "contato.html";  
    }, 1000); 
})


//Criando o script para abrir a seção de "Login" com fade-out
const login = document.getElementById("link-login");
login.addEventListener("click", function(evento){
    evento.preventDefault();
    const link = this;
    // Adiciona a classe que faz o link desaparecer (fade out)
    link.classList.add('fade-out-login');
    setTimeout(function() {
        window.location.href = "login.html";  
    }, 1000); 
})



//Criando o script para fazer o subtitulo desaparecer
function desaparecerSubtitulo(){
    const subtitulo = document.getElementById("subtitulo");
    subtitulo.classList.add("fade-out-subtitulo");
}


//animação do subtitulo
window.onload = function() {
const flutuando = document.getElementById("subtitulo");
flutuando.classList.add('fluido'); 
}




/*Mudar a cor de Fundo*/

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




/*Slideshow */

let imagens =[
    "./src/assets/slide-1.jpg",
    "./src/assets/slide-2.jpg",
    "./src/assets/slide-3.jpg"
];
let i=0;
let time =3000;

function slideShow(){
    document.getElementById("slideshow").src=imagens[i];
    i++;
    if(i == imagens.length) {i=0;}
    setTimeout("slideShow()",time)  
    }
    slideShow();
