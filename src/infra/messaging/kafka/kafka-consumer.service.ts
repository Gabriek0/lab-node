import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['neutral-hog-8361-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bmV1dHJhbC1ob2ctODM2MSS5RvnhcUO5akpaZPrvbCKCLjoKQPTxdI-Zkf9avyE',
          password:
            'HtrPebsx5YHeL0i5t6F0OIypsBy2uuYN4TuGqqkJFZBB4EkxjkXUVdxsj-i7QONOl2LlBw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
