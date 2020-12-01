import React from 'react';
import ButtonRow from "./ButtonRow";
import { mount } from "enzyme";

describe('BUttonRow [component]', () => {
    test('should render', () => {
        const cmp = mount(<ButtonRow />);
        const selector = cmp.exists('.button-row');
        expect(selector).toBe(true);
    });

    test('should trigger click event', () => {
        const props = {
            textList: ['example'],
            onClick: jest.fn()
        };
        const cmp = mount(<ButtonRow {...props} />);
        const selector = cmp.find('.button');
        expect(selector.exists()).toBe(true);

        selector.simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
});