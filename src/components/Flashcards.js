import logoPequeno from "../assets/images/logo-pequeno.png"
import setinha from "../assets/images/setinha.png"
import Bottom from "./Bottom"

const deck = [{question:"O que é JSX?", reply:"Uma extensão de linguagem do JavaScript"},
{question:"O React é __ ", reply:"uma biblioteca JavaScript para construção de interfaces"},
{question: "Componentes devem iniciar com __ ", reply:"letra maiúscula"},
{question:"Podemos colocar __ dentro do JSX", reply:"expressões"},
{question:"O ReactDOM nos ajuda __", reply:"interagindo com a DOM para colocar componentes React na mesma"},
{question:"Usamos o npm para __", reply:"gerenciar os pacotes necessários e suas dependências"},
{question:"Usamos props para __ ", reply:"passar diferentes informações para componentes"},
{question:"Usamos estado (state) para __ ", reply:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

function Flashcard ({question, reply}){
    return (
        <>
            <div className="question">
                <p>Pergunta </p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="card">
                <p>{question}</p>
                <img src={setinha} alt="setinha"/>
            </div>
            <div className="card">
                <p>{reply}</p>
                <div className="reply">
                    <div className="red"><span>Não lembrei</span></div>
                    <div className="yellow"><span>Quase não lembrei</span></div>
                    <div className="green"><span>Zap!</span></div>
                </div>
            </div>
        </>
    )
}




export default function Flashcards (){
    return (
        <>
            <div className="top">
                <img src={logoPequeno} alt="ZapRecall-Logo"/>
                <h1>ZapRecall</h1>
            </div>
            
            <div className="main">
            {deck.map(({question, reply}, index) => (
            <Flashcard  key={index}
                        question = {question}
                        reply = {reply}
            />))}
            </div>
            <Bottom />
        </>
    )
}