const writeCards = (name, event) => {
    const newCards = [];
    for (let i = 0; i < name.length; i++) {
        newCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return newCards; 
}
writeCards(["Guadalupe", "Ollie", "Aki"], `birthday`);

const countDown = (i) => {
    while (i >= 0) {
        console.log(i);
        i--
    }
}