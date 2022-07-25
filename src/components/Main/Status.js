export default function Status({status}) {
    if (status === "blanck"){
        return (<ion-icon name="play-outline" ></ion-icon>)
    }
    if(status === "green"){
        return (<ion-icon name="checkmark-circle" style={{color:'#2FBE34'}}></ion-icon>)
    } 
    if(status == "yellow"){
        return (<ion-icon name="help-circle" style={{color:'#FF922E'}}></ion-icon>)
    }
    if(status == "red"){
        return (<ion-icon name="close-circle" style={{color:'#FF3030'}}></ion-icon>)
    }
}