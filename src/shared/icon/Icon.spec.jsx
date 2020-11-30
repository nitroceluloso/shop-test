import React from 'react';
import Icon from "./Icon";
import { getIcon } from "./Icon.helper";
import { shallow, mount, render } from 'enzyme';

describe('Icon [component]', () => {
    test('should render', () => {
        const cmp = shallow(<Icon name="trash" />);
        expect(cmp).toBeDefined();
    });
});