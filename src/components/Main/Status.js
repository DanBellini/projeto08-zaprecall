export default function Status({status}) {
    if (status === "blanck"){
        return (<ion-icon name="play-outline"></ion-icon>)
    }
    if(status === "green"){
        return (<ion-icon name="checkmark-circle"></ion-icon>)
    } 
    if(status == "yellow"){
        return (<ion-icon name="help-circle"></ion-icon>)
    }
    if(status == "red"){
        return (<ion-icon name="close-circle"></ion-icon>)
    }
}