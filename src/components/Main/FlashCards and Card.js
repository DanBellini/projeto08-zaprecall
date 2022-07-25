import React from "react"
import setinha from "../../assets/images/setinha.png"
import Status from "./Status"




function Card({asking, index, tapCard, status}){
    return(
        <div className={`card ${status}`} onClick={() => tapCard(index)}>
            <p>{asking}</p>
            <Status status={status}/>
        </div>
    )
}

function CardAsking ({question, reply, index, yourRespond}){

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
                <div className="red" onClick={()=> yourRespond(index, "red")}><span>Não lembrei</span></div>
                <div className="yellow" onClick={()=> yourRespond(index, "yellow")}><span>Quase não lembrei</span></div>
                <div className="green"onClick={()=> yourRespond(index, "green")}><span>Zap!</span></div>
            </div>
        </div>)
        
        }
        
        </>
    )
}


export default function Flashcards ({index, asking, select, tapCard, question, reply, status, yourRespond}){
    return (
        <>  
            { !select ? ( 
                <Card key = {index}
                      asking={asking}
                      index={index}
                      tapCard={tapCard}
                      status={status}
                      />) : (
                <CardAsking key={index}
                            question={question}
                            reply={reply} 
                            yourRespond={yourRespond}
                            index={index}           
            />)}
        </>
    )
}