import { SendNotification } from '@application/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [],
})
export class MessagingModule {}
