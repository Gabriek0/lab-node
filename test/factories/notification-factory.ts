import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    recipientId: 'recipient-2',
    content: new Content('Nova notificação'),
    category: 'Notificação',
    ...override,
  });
}
