import React from 'react';
import Input from "./Input";
import renderer from 'react-test-renderer';

describe('Input [component]', () => {
    test('should render', () => {
        const cmp = renderer.create(<Input/>);
        expect(cmp).toBeDefined();
    });
});