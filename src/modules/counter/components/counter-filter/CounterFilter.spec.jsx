import React from 'react';
import { shallow } from "enzyme";
import CounterFilter from "./CounterFilter";

describe('CounterFilter [component]', () => {
    test('should render', () => {
        const cmp = shallow(<CounterFilter />);
        expect(cmp.exists('.counter-filter')).toBe(true)
    });

    test('should call onFocusHandler', () => {
        const props = {
            onFocusChangeHandler: jest.fn()
        }
        const cmp = shallow(<CounterFilter {...props} />);
        const inst = cmp.instance();
        inst.onFocusHandler();
        expect(props.onFocusChangeHandler).toHaveBeenCalled()
    });

    test('should call closeFilter', () => {
        const props = {
            onFocusChangeHandler: jest.fn()
        }
        const cmp = shallow(<CounterFilter {...props} />);
        const inst = cmp.instance();
        inst.closeFilter();
        expect(props.onFocusChangeHandler).toHaveBeenCalled()
    });
});