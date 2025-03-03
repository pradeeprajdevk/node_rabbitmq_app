# node_rabbitmq_app

A simple "Messaging queue" app with Node, RabbitMQ and TS

<br/> <br/>

1. npm init -y <br/>
2. Install dependencies <br/>
   - npm install amqplib dotenv <br/>
   - npm install -D typescript ts-node @types/node <br/>
3. Configure TypeScript <br/>
   - npx tsc --init <br/>
4. To test the consumer and producer <br/>
   - npx ts-node consumer.ts <br/>
   - npx ts-node producer.ts <br/>
