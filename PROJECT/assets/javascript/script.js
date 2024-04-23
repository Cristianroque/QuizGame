const points = document.querySelector("#points")
const A = document.querySelector("#A")
const B = document.querySelector("#B")
const C = document.querySelector("#C")
const D = document.querySelector("#D")
const pergunta = document.querySelector("#pergunta")
const Alert = document.querySelector(".alert")
const boxQuiz = document.querySelector(".quizBox")
const tentativas = document.querySelector("#tentativas")


let nivel = 1;
let respostaCerta = false;

let resulPoints = 0;
let resulTent = 3;

let pergunta2 = [
'Pergunta 2: Quem escreveu a peça teatral "Romeu e Julieta"? ',
'a) William Shakespeare',
'b) Jane Austen',
'c) Charles Dickens',
'd) F. Scott Fitzgerald'
]
let pergunta3 = [
'Pergunta 3: Qual é o elemento químico mais abundante na crosta terrestre"? ',
'a) Carbono',
'b) Ferro',
'c) Oxigênio',
'd) Silício'
]
let pergunta4 = [
'Pergunta 4: Qual é o país mais populoso do mundo? ',
'a) Índia',
'b) China',
'c) Estados Unidos',
'd) Brasil'
]
let pergunta5 = [
'Pergunta 5: Qual é a capital do Canadá? ',
'a) Montreal',
'b) Toronto',
'c) Ottawa',
'd) Vancouver'
]



function VerificarRespostaCerta(opcao) {

    if(nivel == 1){

        logicaOpcaoCerta("B", 2, `${opcao}`)

    }else if(nivel == 2){

        logicaOpcaoCerta("A", 3, `${opcao}`)

    }else if(nivel == 3){

        logicaOpcaoCerta("C", 4, `${opcao}`)

    }else if(nivel == 4){

        logicaOpcaoCerta("A", 5, `${opcao}`)

    }else if(nivel == 5){

        logicaOpcaoCerta("C", 6, `${opcao}`)

    }
}

function proximaPergunta(questao){
    
    if(questao == 2){

        B.style.animation = "none"
        setTimeout(function(){
        B.style.animation = "correto 3s"
        },100)
        setTimeout(function(){
            pergunta.textContent = pergunta2[0]
            A.textContent = pergunta2[1] 
            B.textContent = pergunta2[2]
            C.textContent = pergunta2[3]
            D.textContent = pergunta2[4]
            nivel = 2;
            resulPoints += 10
            points.textContent = resulPoints
        },3000)  

    }else if(questao == 3){

        A.style.animation = "none"
        setTimeout(function(){
        A.style.animation = "correto 3s"
        },100)
        setTimeout(function(){
            pergunta.textContent = pergunta3[0] 
            A.textContent = pergunta3[1]  
            B.textContent = pergunta3[2]  
            C.textContent = pergunta3[3]  
            D.textContent = pergunta3[4]  
            nivel = 3;
            resulPoints += 10
            points.textContent = resulPoints
        },3000) 

    }else if(questao == 4){

        C.style.animation = "none"
        setTimeout(function(){
        C.style.animation = "correto 3s"
        },100)
        setTimeout(function(){
            pergunta.textContent = pergunta4[0] 
            A.textContent = pergunta4[1]  
            B.textContent = pergunta4[2]  
            C.textContent = pergunta4[3]  
            D.textContent = pergunta4[4]  
            nivel = 4;
            resulPoints += 10
            points.textContent = resulPoints
        },3000)

    }else if(questao == 5){

        A.style.animation = "none"
        setTimeout(function(){
        A.style.animation = "correto 3s"
        },100)
        setTimeout(function(){
            pergunta.textContent = pergunta5[0] 
            A.textContent = pergunta5[1]  
            B.textContent = pergunta5[2]  
            C.textContent = pergunta5[3]  
            D.textContent = pergunta5[4]  
            nivel = 5;
            resulPoints += 10
            points.textContent = resulPoints
        },3000)

    }else if(questao == 6){

        C.style.animation = "none"
        setTimeout(function(){
        C.style.animation = "correto 3s"
        },100)
        setTimeout(function(){
            resulPoints += 10
            boxQuiz.classList.add("boxQuizclass")
            boxQuiz.textContent = `Parabéns! você completou o quiz com ${resulPoints} Pontos.` 

        },3000)

    }
}

function logicaOpcaoCerta(casee, pergunta, opition){

switch(opition){
    case `${casee}` : proximaPergunta(pergunta)
    console.log(respostaCerta)
    break;

    default: 
        Alert.style.animation = "none"
    setTimeout(function(){
        Alert.style.animation = "moverAlert 3s ease-in-out" 
    },100)
    resulPoints -= 5
    resulTent -= 1
    points.textContent = resulPoints
    tentativas.textContent = resulTent
    if(tentativas.textContent == 0){
        setTimeout(function(){
            boxQuiz.classList.add("boxQuizclassRed")
            boxQuiz.textContent = `Você perdeu! todas as suas tentativas foram esgotadas, clique no botão para recomeçar: ` 
        }, 500)
    }
} 

}