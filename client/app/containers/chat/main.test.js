import React from 'react';
import { shallow, mount } from 'enzyme';
import { Chat } from './main.js';

const getProps = () => {
  return {
    fetchData: jest.fn(),
  };
};

const getUnit = (props = getProps()) =>
  shallow(<Chat {...props} />)
;

describe('Chat', () => {
  it('should render correctly', () => {
    const unit = getUnit();

    expect(unit).toMatchSnapshot();
  });

  it('should call this.props.fetchData when it mounts', () => {
    const props = getProps();
    const unit = getUnit(props);

    expect(props.fetchData).toHaveBeenCalled();
  });

  it(`should render "ChatBubble" for each item in the "message" prop`, () => {
    const props = getProps();
    props.fetchDataRequestStatus = 'success';
    props.messages = [ {}, {}, {} ];

    const unit = getUnit(props);

    expect(unit.find('ChatBubble').length).toBe(3);
  });

  it(`should render a spinner when the props fetchDataRequestStatus is "pending"`, () => {
    const props = getProps();
    props.fetchDataRequestStatus = 'pending';

    const unit = getUnit(props);

    expect(unit.find('.chat__spinner').exists()).toBe(true);
    expect(unit.find('.chat__error').exists()).toBe(false);
    expect(unit.find('.chat__body').exists()).toBe(false);
  });

  it(`should render "chat-body" when the "fetchDataRequestStatus" prop is "success" and we have messages`, () => {
    const props = getProps();
    props.fetchDataRequestStatus = 'success';
    props.messages = [{}];

    const unit = getUnit(props);

    expect(unit.find('.chat__spinner').exists()).toBe(false);
    expect(unit.find('.chat__error').exists()).toBe(false);
    expect(unit.find('.chat__body').exists()).toBe(true);
  });

  it(`should render an error when the "fetchDataRequestStatus" prop is "fail"`, () => {
    const props = getProps();
    props.fetchDataRequestStatus = 'error';

    const unit = getUnit(props);

    expect(unit.find('.chat__spinner').exists()).toBe(false);
    expect(unit.find('.chat__error').exists()).toBe(true);
    expect(unit.find('.chat__body').exists()).toBe(false);
  });
});