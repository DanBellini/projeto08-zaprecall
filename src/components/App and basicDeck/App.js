import react from "react";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";



export default function App (){

    const [init, setInit] = react.useState(true);


    return(
        <>
            {init ?
                <Menu setInit={setInit} />
                :
                <Main />
            }
        </>
    )
}