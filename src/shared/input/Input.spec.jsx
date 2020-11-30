import React from 'react';
import Input from "./Input";
import { shallow } from 'enzyme';

describe('Input [component]', () => {
    test('should render', () => {
        const cmp = shallow(<Input/>);
        expect(cmp.is('.input-text')).toBe(true);
    });
});