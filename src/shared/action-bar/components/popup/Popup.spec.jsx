import React from 'react';
import Popup from "./Popup";
import { shallow, mount } from "enzyme";

describe('Popup [component]', () => {
    test('should render', () => {
        const cmp = shallow(<Popup />);
        const selector = cmp.exists('.popup');
        expect(selector).toBe(true);
    });

    test('should call onCopy', () => {
        const props = {
            onCopy: jest.fn()
        }
        const cmp = mount(<Popup {...props} />);
        cmp.find('button').first().simulate('click');
        expect(props.onCopy).toHaveBeenCalled();
    });
});