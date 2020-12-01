import React from 'react';
import ActionBar from "./ActionBar";
import { shallow, mount } from 'enzyme';

describe('Action bar [component]', () => {
    test('should render', () => {
        const cmp = shallow(<ActionBar />);
        expect(cmp.is('.action-bar')).toBe(true);
    });

    test('should show actions buttons', () => {
        const props = {
            showActions: true,
        }
        const cmp = shallow(<ActionBar {...props} />);
        const selector = cmp.exists('.action-bar__action-buttons');
        expect(selector).toBe(true);
    });

    test('should trigger add event', () => {
        const props = {
            onAdd: jest.fn()
        }
        const cmp = mount(<ActionBar {...props} />);
        cmp.find('button').simulate('click');
        expect(props.onAdd).toHaveBeenCalled();
    });

    test('should trigger delete event', () => {
        const props = {
            showActions: true,
            onDelete: jest.fn()
        }
        const cmp = mount(<ActionBar {...props} />);
        cmp.find('.button').at(1).simulate('click');
        expect(props.onDelete).toHaveBeenCalled();
    });
});