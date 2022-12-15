import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('get notifications', () => {
  it('should be able to list notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const getNotifications = new GetRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-3' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-3' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-4' }),
    );

    const { notifications } = await getNotifications.execute({
      recipientId: 'recipient-3',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-3' }),
        expect.objectContaining({ recipientId: 'recipient-3' }),
      ]),
    );
  });
});
