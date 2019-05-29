import CONSTANTS from './constants';

const constantKeysMock = {
  FETCH_DATA: 'CHAT/FETCH_DATA',
  FETCH_DATA_SUCCESS: 'CHAT/FETCH_DATA_SUCCESS',
  FETCH_DATA_PENDING: 'CHAT/FETCH_DATA_PENDING',
  FETCH_DATA_FAIL: 'CHAT/FETCH_DATA_FAIL',
};

describe(`Chat Constants`, () => {
  it(`should have the same amount of constants`, () => {
    const actual = Object.keys(constantKeysMock).length;
    const expected = Object.keys(CONSTANTS).length;

    expect(actual).toBe(expected);
  });

  it(`should have the same constants values`, () => {
    const mockedConstantKeys= Object.keys(constantKeysMock);
    const constantsKeys = Object.keys(CONSTANTS);

    constantsKeys.forEach(constantItem => {
      const actual = constantsKeys[constantItem];
      const expected = mockedConstantKeys[constantItem];

      expect(actual).toBe(expected);
    })
  });
})
