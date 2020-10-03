module.exports = {
    name: 'vaihtoehdot',
    description: "this is a vaihtoehto command!",
    execute(message, args){
        message.channel.send('A, B ja C');
    }
}