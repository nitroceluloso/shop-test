import React from 'react';
import { shallow} from 'enzyme';
import Button from "./Button";

describe('Button [component]', () => {
    test('should render', () => {
        const cmp = shallow(<Button />);
        expect(cmp).toBeDefined();
    });

    test('should click works', () => {
        const props = {
            text: 'save',
            onClickHandler: jest.fn()
        }
        const cmp = shallow(<Button {...props} />);
        cmp.find('button').simulate('click')
        expect(props.onClickHandler).toHaveBeenCalled();
    });
});
