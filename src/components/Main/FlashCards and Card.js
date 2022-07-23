import setinha from "../../assets/images/setinha.png"

function Card({asking, index, tapCard}){
    return(
        <div className="card" onClick={() => tapCard(index)}>
            <p>{asking}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}

function CardAsking ({question}){
    return(
        <div className="question">
            <p>{question}</p>
            <img src={setinha} alt="setinha"/>
        </div>
    )
}


export default function Flashcards ({index, asking, select, tapCard, question}){
    return (
        <>  
            { !select ? ( 
                <Card key = {index}
                      asking={asking}
                      tapCard={tapCard}
                      />) : (
                <CardAsking question={question}/>)}
        </>
    )
}