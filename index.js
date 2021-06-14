const names = ['Lisa', 'Kaitlin', 'Jan'];
var event = 'surprise'

function writeCards(names, event) {
    let final = [];
    for (let i = 0; i < names.length; i++){
        final.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
return final;
}
let finishedCards = writeCards(['Lisa', 'Kaitlin', 'Jan'], 'birthday');
console.log (finishedCards);

function countDown() {
    for (let countDown = 10; countDown >= 0; countDown--) {
        console.log(countDown);
    }
}
