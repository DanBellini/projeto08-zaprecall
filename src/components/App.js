import react from "react";
import "../assets/styles/reset.css"
import "../assets/styles/style.css"
import Flashcards from "./Flashcards";
import Menu from "./Menu";



export default function App (){

    const [init, setInit] = react.useState(true);


    return(
        <>
            {init ?
                <Menu setInit={setInit} />
                :
                <Flashcards />
            }
        </>
    )
}