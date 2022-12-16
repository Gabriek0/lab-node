import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as RawNotification } from '@prisma/client';

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

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        createdAt: raw.createdAt,
        canceledAt: raw.canceledAt,
      },
      raw.id,
    );
  }
}
