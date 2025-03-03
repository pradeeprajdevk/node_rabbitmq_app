import amqplib from 'amqplib';

const recieverMessage = async () => {
    try {
        const connection = await amqplib.connect("amqp://admin:admin123@<your_host>:5672");
        const channel = await connection.createChannel();

        const queue = "task_queue";

        await channel.assertQueue(queue, { durable: true});

        console.log(`Waiting for message in ${queue}....`);

        channel.consume(queue, (msg) => {
            if (msg) {
                console.log(`Recieved: ${msg.content.toString()}`);
                channel.ack(msg);
            }
        });
    } catch(error) {
        console.error("Error in consumer:", error);
    }
}

recieverMessage();