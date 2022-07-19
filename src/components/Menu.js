import logo from "../assets/images/logo.png"
export default function Menu (){
    return (
        <div className="menu">
            <img src ={logo} alt="Logo"/>
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!</button>
        </div>
    )
}