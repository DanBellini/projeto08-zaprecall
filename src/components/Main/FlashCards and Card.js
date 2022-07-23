import React from "react"
import setinha from "../../assets/images/setinha.png"

function Card({asking, index, tapCard}){
    return(
        <div className="card" onClick={() => tapCard(index)}>
            <p>{asking}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}

function CardAsking ({question, reply}){

    const[respond, setRespond] = React.useState(false )

    return(
        <>
        {!respond ? (
            <div className="question">
                <p>{question}</p>
                <img src={setinha} alt="setinha" onClick={() => setRespond(true)}/>
            </div> 
        ) :(
        <div className="question">
            <p>{reply}</p>
            <div className="reply">
                <div className="red"><span>Não lembrei</span></div>
                <div className="yellow"><span>Quase não lembrei</span></div>
                <div className="green"><span>Zap!</span></div>
            </div>
        </div>)
        
        }
        
        </>
    )
}


export default function Flashcards ({index, asking, select, tapCard, question, reply}){
    return (
        <>  
            { !select ? ( 
                <Card key = {index}
                      asking={asking}
                      index={index}
                      tapCard={tapCard}
                      />) : (
                <CardAsking question={question}
                            reply={reply}            
            />)}
        </>
    )
}