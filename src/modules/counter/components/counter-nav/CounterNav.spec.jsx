import React from 'react';
import CounterNav from "./CounterNav";
import { shallow } from "enzyme";

describe('CounterNAv [component]', () => {
    test('should render', () => {
        const cmp = shallow(<CounterNav />);
        expect(cmp.exists()).toBe(true);
    });
});