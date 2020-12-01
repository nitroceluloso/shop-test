import React from 'react';
import ListCounter from "./ListCounter";
import { shallow } from "enzyme";

describe('ListCounter [component]', () => {
    test('should render', () => {
        const cmp = shallow(<ListCounter />);
        expect(cmp.exists()).toBe(true);
    });
});