import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonShare from "./ButtonShare";

describe('ButtonShare [component]', () => {
    test('should render', () => {
        const cmp = mount(<ButtonShare />);
        const selector = cmp.exists('.action-bar__button-share');
        expect(selector).toBe(true);
    });

    test('should show popup and then hide', () => {
        const cmp = mount(<ButtonShare />);
        cmp.find('button').simulate('click');
        const selector = cmp.exists('.popup');
        expect(selector).toBe(true);

        cmp.find('button').first().simulate('click');
        const secondSelector = cmp.exists('.popup');
        expect(secondSelector).toBe(false);
    });
});