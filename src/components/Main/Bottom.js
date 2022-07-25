import originalDeck from "../App and basicDeck/Deck";
import Status from "./Status";
import party from "../../assets/images/party.png";
import sad from "../../assets/images/sad.png"


export default function Bottom ({answered, renderStatus}){

    function renderResult(){
        const result = renderStatus.find(value => value === 'red')
        return (<>
            {result ? (
                <>
                <div className="message">
                    <img src={sad} alt ="Triste"/>
                    <span>Putz...</span>
                </div>
                <div className="message">
                    <p>Ainda faltam alguns...</p>
                    <p>Mas não desanime!</p>
                </div>
                </>
            ):(
                <>
                <div className="message">
                    <img src={party} alt="Alegria!"/>
                    <span>Parabéns!</span>
                </div>
                <div className="message">
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
                </>
            )}
        </>)
    }

    return (
        <div className="bottom">
            {renderStatus.length === 8 ? renderResult() : (null)}
            <p>{answered}/{originalDeck.length} concluidas</p>
            <div>
                {renderStatus.map(value => {
                    if (value !=="blanck"){
                        return <Status status={value}
                    />}
                })}
            </div>
        </div>
    )
}
