import ChatUtilities from './main.js';

describe('ChatUtilities', () => {
  describe('.normaliseUserCollection', () => {
    it(`should create an object of id:Objects`, () => {
      const expectedOutput = {
        '1': {
          id: 1,
          something: 1,
        },
      };

      const collection = [
        {
          id: 1,
          something: 1,
        }
      ];

      const output = ChatUtilities.normaliseUserCollection(collection);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('.sortMessagesByDate', () => {
    it(`should sort messages by date when passing an array of messages`, () => {
      const expectedOutput = [
        {
          id: 'b03569ae-ccbf-4975-8040-4daba638b407',
          userId: '16373df5-da0a-4074-8295-f916b94269f4',
          message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          timestamp: '2016-11-09T05:04:58Z'
        },
        {
          id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
          userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
          message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
          timestamp: '2017-02-09T04:27:38Z'
        },
      ];

      const messages = [
        {
          id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
          userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
          message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
          timestamp: '2017-02-09T04:27:38Z'
        },
        {
          id: 'b03569ae-ccbf-4975-8040-4daba638b407',
          userId: '16373df5-da0a-4074-8295-f916b94269f4',
          message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          timestamp: '2016-11-09T05:04:58Z'
        },
      ];

      const output = ChatUtilities.sortMessagesByDate(messages);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('.extendMessagesWithUserData', () => {
    const userCollection = [
      {
        id: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
        firstName: 'Helen',
        lastName: 'Hawkins',
        email: 'hhawkins1@posterous.com',
        avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
        ip: '179.239.189.173'
      },
      {
        id: 'd18b107b-6874-49bd-94c0-4d830fc7eaed',
        firstName: 'Marilyn',
        lastName: 'Andrews',
        email: 'mandrews4@google.it',
        avatar: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
        ip: '102.50.7.81'
      },
    ];

    const messageCollection = [
      {
        id: '45eca532-2d63-4519-9fe9-5aa3b81d919a',
        userId: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
        message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
        timestamp: '2016-10-04T05:22:32Z'
      },
      {
        id: 'bd9d6bc9-5231-44de-aadc-a4a0ab6eba7c',
        userId: 'd18b107b-6874-49bd-94c0-4d830fc7eaed',
        message: 'Donec ut mauris eget massa tempor convallis.',
        timestamp: '2016-04-14T08:26:37Z'
      }
    ];

    const expectedOutput = [
      {
        ...messageCollection[0],
        sender: userCollection[0],
      },
      {
        ...messageCollection[1],
        sender: userCollection[1],
      },
    ];

    const output = ChatUtilities.extendMessagesWithUserData(messageCollection, userCollection);
  });

});