import React from 'react';
import { shallow } from 'enzyme';
import { ChatBubble } from './index.js';

const getProps = () => {
  return {
    id: 'b03569ae-ccbf-4975-8040-4daba638b407',
    userId: '16373df5-da0a-4074-8295-f916b94269f4',
    message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    timestamp: '2016-11-09T05:04:58Z',
    sender: {
      id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
      firstName: 'Martin',
      lastName: 'Bradley',
      email: 'mbradley0@google.it',
      avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      ip: '166.124.172.160',
    },
  };
};

const getUnit = (props = getProps()) =>
  shallow(<ChatBubble {...props} />)
;

describe('ChatBubble', () => {
  describe(`Render`, () => {
    it('should render correctly', () => {
      const unit = getUnit();

      expect(unit).toMatchSnapshot();
    });
  });

  describe(`Events`, () => {
    describe(`when mouseEnter on .chat-bubble`, () => {
      it(`should set this.state.hover to true`, () => {
        const unit = getUnit();

        unit.find('.chat-bubble').simulate('mouseEnter');

        expect(unit.state().hover).toBe(true);
      });

      it(`should render the email DOM Element`, () => {
        const unit = getUnit();

        unit.find('.chat-bubble').simulate('mouseEnter');

        expect(unit.find('.chat-bubble').find('.chat-bubble__email').exists()).toBe(true);
      });
    });

    describe(`when mouseLeave on .chat-bubble`, () => {
      it(`should set this.state.hover to false`, () => {
        const unit = getUnit();

        unit.find('.chat-bubble').simulate('mouseEnter');
        unit.find('.chat-bubble').simulate('mouseLeave');

        expect(unit.state().hover).toBe(false);
      });

      it(`should hide the email DOM Element`, () => {
        const unit = getUnit();

        unit.find('.chat-bubble').simulate('mouseEnter');
        unit.find('.chat-bubble').simulate('mouseLeave');

        expect(unit.find('.chat-bubble').find('.chat-bubble__email').exists()).toBe(false);
      });
    });
  });

  describe('Props and DOM Nodes', () => {
    it('should render an image when the "sender.avatar" prop is set', () => {
      const props = getProps();
      const unit = getUnit(props);

      expect(unit.find('.chat-bubble__avatar').exists()).toBe(true);
    });

    it('should NOT render an image when the "sender.avatar" prop is NOT set', () => {
      const props = getProps();
      delete props.sender.avatar;

      const unit = getUnit(props);

      expect(unit.find('.chat-bubble__avatar').exists()).toBe(false);
    });

    it('should NOT render a message when the "message" prop is NOT set', () => {
      const props = getProps();
      props.message = undefined;

      const unit = getUnit(props);

      expect(unit.find('.chat-bubble__message').exists()).toBe(false);
    });

    it('should render a message when the "message" prop is set', () => {
      const props = getProps();
      const unit = getUnit(props);

      expect(unit.find('.chat-bubble__message').exists()).toBe(true);
    });

    it('should NOT render a date when the "timestamp" prop is NOT set', () => {
      const props = getProps();
      delete props.timestamp;

      const unit = getUnit(props);

      expect(unit.find('.chat-bubble__date').exists()).toBe(false);
    });

    it('should render a date when the "timestamp" prop is set in a formatted way', () => {
      const props = getProps();
      props.timestamp = '2016-11-09T05:04:58Z';
      const unit = getUnit(props);

      expect(unit.find('.chat-bubble__date').exists()).toBe(true);
      expect(unit.find('.chat-bubble__date').text()).toBe('09 Nov 2016 - 05:04');
    });
  });
});
