const amqp = require('amqplib/callback_api');

// step 1 create connection
amqp.connect('amqp://localhost', (connError, connection) => {
    if(connError){
        throw connError;
    }
    // step 2 create channel
    connection.createChannel((channelError, channel) => {
        if(channelError){
            throw channelErrror;
        }
        // step 3 Assert Queue
        const QUEUE = 'codingtest'; //name of queue
        channel.assertQueue(QUEUE);
        // step 4 receive message to queue
        channel.consume(QUEUE, (message) => {
            console.log(`Message is received: ${message.content}`);
        }, {
            noAck: true //notify once the message has been read
        }); //first arg the queue name and the second arg message received
    })
})