import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import CONSTANTS from './constants';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

describe(`Chat Actions`, () => {
  it(`should expose the correct methods`, () => {
    const actionNames = [
      'fetchData',
      'fetchDataPending',
      'fetchDataSuccess',
      'fetchDataFail',
    ];

    expect(Object.keys(actions)).toHaveLength(actionNames.length);

    actionNames.forEach(actionNamesItem => {
      expect(actions).toHaveProperty(actionNamesItem);
      expect(typeof actions[actionNamesItem]).toBe('function');
    });
  });

  describe(`Action Creators`, () => {
    it(`should return a format that redux accepts`, () => {
      const actionCreatorsNames = [
        'fetchDataPending',
        'fetchDataSuccess',
        'fetchDataFail',
      ];

      actionCreatorsNames.forEach(actionCreatorNameItem => {
        const actionObject = actions[actionCreatorNameItem]();

        expect(actionObject).toHaveProperty('payload');
        expect(actionObject).toHaveProperty('type');
        expect(typeof actionObject.type).toBe('string');
      });
    });
  });

  describe(`Methods`, () => {
    describe(`.fetchDataSuccess`, () => {
      it(`should have the fetchDataRequestStatus property set to "success"`, () => {
        const { payload } = actions.fetchDataSuccess();

        expect(payload).toHaveProperty('fetchDataRequestStatus');
        expect(payload.fetchDataRequestStatus).toBe('success');
      });

      it(`should have the correct "type" property`, () => {
        const { type } = actions.fetchDataSuccess();

        expect(type).toBe(CONSTANTS.FETCH_DATA_SUCCESS);
      });

      it(`should contain messages when passed as argument`, () => {
        const messageItem = {
          propName: 'hello',
        };
        const messages = [ messageItem ];
        const { payload } = actions.fetchDataSuccess({ messages });

        expect(payload).toHaveProperty('messages');
        expect(Object.keys(payload.messages)).toHaveLength(1);
        expect(payload.messages[0]).toMatchObject(messageItem);
      });
    });

    describe(`.fetchDataPending`, () => {
      it(`should have the fetchDataRequestStatus property set to "pending"`, () => {
        const { payload } = actions.fetchDataPending();

        expect(payload).toHaveProperty('fetchDataRequestStatus');
        expect(payload.fetchDataRequestStatus).toBe('pending');
      });

      it(`should have the correct "type" property`, () => {
        const { type } = actions.fetchDataPending();

        expect(type).toBe(CONSTANTS.FETCH_DATA_PENDING);
      });
    });

    describe(`.fetchDataFail`, () => {
      it(`should have the fetchDataRequestStatus property set to "fail"`, () => {
        const { payload } = actions.fetchDataFail();

        expect(payload).toHaveProperty('fetchDataRequestStatus');
        expect(payload.fetchDataRequestStatus).toBe('error');
      });

      it(`should have the correct "type" property`, () => {
        const { type } = actions.fetchDataFail();

        expect(type).toBe(CONSTANTS.FETCH_DATA_FAIL);
      });
    });

    describe(`.fetchData`, () => {
      it(`should call "FETCH_DATA_PENDING" and "FETCH_DATA_SUCCESS" when successful`, () => {
        const store = mockStore({});

        const success = () => {
          const expectedActions = [
            CONSTANTS.FETCH_DATA_PENDING,
            CONSTANTS.FETCH_DATA_SUCCESS,
          ];

          const actionsCalled = store.getActions();

          actionsCalled.forEach(actionItem => {
            expect(expectedActions).toContain(actionItem.type)
          });
        }

        return store.dispatch(actions.fetchData())
          .then(success)
        ;
      });
    });
  });

});
