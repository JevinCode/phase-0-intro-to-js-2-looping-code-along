// Code your solutions in this file

function writeCards(names, eventName) {
    let messages = [];
    for(let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown(n) {
    while(n >= 0) {
        console.log(n--);
    }
}