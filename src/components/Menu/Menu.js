import logo from "../../assets/images/logo.png"

export default function Menu ({ setInit }){
    return (
        <div className="menu">
            <img src ={logo} alt="Logo Zap Recall"/>
            <h1>ZapRecall</h1>
            <button onClick={()=> setInit(false)}>Iniciar Recall!</button>
        </div>
    )
}