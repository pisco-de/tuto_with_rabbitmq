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
        // step 4 send message to queue
        channel.sendToQueue(QUEUE, Buffer.from('hello its rabbitmq test time')); //first arg the queue name and the second arg message of queue
        // console.log(`Message is sended to ${QUEUE}`);
        console.log(`Message is sended to ${JSON.stringify(QUEUE)}`);
    })
})