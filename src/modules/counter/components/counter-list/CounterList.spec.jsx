import React from 'react';
import { shallow, mount } from "enzyme";
import CounterList from "./CounterList";

describe('CounterList [component]', () => {
    test('should render', () => {
        const cmp = shallow(<CounterList />);
        expect(cmp.exists('.counter-list')).toBe(true);
    });

    test('should render counter list', () => {
        const props = {
            counterList: [{id:1, title: 'asd'}]
        }
        const cmp = mount(<CounterList {...props} />);
        const selector = cmp.exists('.counter-element');
        expect(selector).toBe(true);
    });

    test('should render counter list empty no filter', () => {
        const props = {
            counterList: []
        }
        const cmp = mount(<CounterList {...props} />);
        const selector = cmp.exists('.counter__empty-list');
        expect(selector).toBe(true);
    });
});