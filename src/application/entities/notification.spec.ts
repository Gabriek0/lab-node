import { Content } from './content';
import { Notification } from './notification';

describe('Notificaiton', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      category: 'Categoria da notificação',
      createdAt: new Date(),
      content: new Content('Nova notificação!'),
    });

    expect(notification).toBeTruthy();
  });
});
