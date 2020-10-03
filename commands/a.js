module.exports = {
    name: 'a',
    description: "this is a petri n command!",
    execute(message, args){
        message.channel.send('Menin paskalle tai kuselle');
    }
}