import React from 'react';
import CounterContent from "./CounterContent";
import { shallow } from "enzyme";

describe('CounterContent [component]', () => {
    test('should render', () => {
        const cmp = shallow(<CounterContent/>)
        const selector = cmp.exists('.counter-content');
        expect(selector).toBe(true)
    });

    test('should filter', () => {
        const props = {
            counterList: [{id: 1, title: 'qwe'}, {id: 1, title: 'qqe'}]
        }
        const cmp = shallow(<CounterContent {...props} />)
        const inst = cmp.instance();
        inst.onFilter({ target: { value: 'qq' } });
        expect(cmp.state('counterListFiltered').length).toBe(1);
    });
});