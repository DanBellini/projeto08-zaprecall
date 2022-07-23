import React from "react"
import logoPequeno from "../../assets/images/logo-pequeno.png"
import originalDeck from "../App and basicDeck/Deck"
import Flashcards from "./FlashCards and Card"
import Bottom from "./Bottom"



export default function Main (){

    const [deck,setDeck] = React.useState(originalDeck);

    function tapCard (selectIndex){
        let newDeck = deck.map((value, index) => {
            if(index === selectIndex){
                return{
                    ...value,
                    select:true,
                }
            } else {
                return{
                    ...value,
                    select:false,
                }
            }
        })

        setDeck([...newDeck])
    }

    return (
        <>
            <div className="top">
                <img src={logoPequeno} alt="ZapRecall-Logo"/>
                <h1>ZapRecall</h1>
            </div>
            
            <div className="main">
            {deck.map((value, index) => (<Flashcards key={index}
                                                     asking = {`Pergunta ${index +1}`}
                                                     select = {value.select}
                                                     index = {index}
                                                     tapCard = {tapCard}
                                                     question ={value.question}
                                                     reply ={value.reply}
            />))}
            </div>
            <Bottom />
        </>
    )
}