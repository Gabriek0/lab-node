import { Content } from '../entities/content';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      category: 'Categoria',
      content: 'Nova notificação',
    });

    expect(notification).toBeTruthy();
  });
});
