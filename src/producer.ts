import amqplib from 'amqplib';

const sendMessage = async () => {
    try {
        const connection = await amqplib.connect("amqp://admin:admin123@<your_host>:5672/");
        const channel = await connection.createChannel();

        const queue = "task_queue";
        const message = "Hello, RabbitMQ!";

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(message));

        console.log(`Sent: ${message}`);

        setTimeout(() => {
            connection.close();
        }, 500);
    } catch(error) {
        console.error("Error in producer:", error);
    }
};

sendMessage();