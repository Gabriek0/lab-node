import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from '@infra/http/controllers/notification.controller';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [],
})
export class MessagingModule {}
