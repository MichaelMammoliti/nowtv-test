import moment from 'moment';

const normaliseUserCollection = userCollection => {
  return userCollection.reduce((acc, userItem) => {
    acc[userItem.id] = userItem;

    return acc;
  }, {});
};

const sortMessagesByDate = messages => {
  const sortedMessages = messages.sort((a, b) => {
    const currentItemTimestamp = +moment(a.timestamp).format('X');
    const nextItemTimestamp = +moment(b.timestamp).format('X');

    return currentItemTimestamp - nextItemTimestamp;
  });

  return sortedMessages;
};

const extendMessagesWithUserData = (messageCollection, userCollection) => {
  return messageCollection.reduce((acc, messageItem) => {
    const sender = userCollection[messageItem.userId];

    if (sender) {
      const newMessage = {
        ...messageItem,
        sender,
      };

      delete newMessage.userId;

      acc.push(newMessage);
    }

    return acc;
  }, []);
};

export default {
  sortMessagesByDate,
  normaliseUserCollection,
  extendMessagesWithUserData,
};
