import { Notification } from '@application/entities/notification';

export class PrismaNotifciationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      createdAt: notification.createdAt,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      content: notification.content.value,
    };
  }
}
