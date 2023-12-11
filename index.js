function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cmdWrite(message, div){
    command.disabled = true;
    for (let i = 0; i < message.length; i++){
        await sleep(50);
        div.innerHTML += message.charAt(i);
    }
    div.innerHTML += "<br>" + "</br>";
    command.disabled = false;
    command.focus();
}