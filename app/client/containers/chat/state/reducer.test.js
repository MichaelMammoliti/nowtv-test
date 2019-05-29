import reducer from './reducer';
import * as actions from './actions';
import CONSTANTS from './constants';

describe('Chat Reducer', () => {
  it(`should extend the store when we fetched the messages.`, () => {
    const messages = [
      {
        id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
        userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        timestamp: '2017-02-09T04:27:38Z',
      },
    ];

    const action = actions.fetchDataSuccess({ messages });
    const updatedStore = reducer({}, action);

    expect(updatedStore.messages).toEqual(messages);
  });

  it(`should react to it's own constants.`, () => {
    Object.keys(CONSTANTS).forEach(constantItem => {
      const action = {
        type: CONSTANTS[constantItem],
        payload: {
          something: true,
        },
      };

      const state = reducer({}, action);
      const expected = state.something;
      const received = true;

      expect(received).toBe(expected);
    });
  });

  it(`should not react to an unkwnown action.`, () => {
    Object.keys(CONSTANTS).forEach(constantItem => {
      const action = {
        type: 'TEST_ACTION',
        payload: {
          something: true,
        },
      };

      const state = reducer({}, action);
      const expected = state.something;
      const received = undefined;

      expect(received).toBe(expected);
    });
  });
});
