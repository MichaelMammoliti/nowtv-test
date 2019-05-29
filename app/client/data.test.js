import messages from './__mocks__/messages.json';
import members from './__mocks__/members.json';
import * as ChatAPIs from './data.js';

describe('Chat APIs', () => {
  describe(`.randomDelayPromise()`, () => {
    it(`should return a resolved promise`, () => {
      const actual = 'some data';
      const expected = 'some data';

      return expect(ChatAPIs.randomDelayPromise(actual)).resolves.toBe(expected);
    });

    it(`should pass its argument to the .then()`, () => {
      const expected = 'something';

      const success = (data) => {
        expect(data).toBe(expected);
      };

      return ChatAPIs.randomDelayPromise(expected)
        .then(success)
      ;
    });
  });


  describe(`.getMessages()`, () => {
    it('should return a promise with all messages', () => {
      const success = (data) => {
        expect(data).toBe(messages);
      };

      return ChatAPIs.getMessages()
        .then(success)
      ;
    });
  });

  describe(`.getMembers()`, () => {
    it('should return a promise with all members', () => {
      const success = (data) => {
        expect(data).toBe(members);
      };

      return ChatAPIs.getMembers()
        .then(success)
      ;
    });
  });
});
