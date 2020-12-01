import React from 'react';
import ModalBackground from "./ModalBackground";
import { mount } from "enzyme";

describe('ModalBackground [component]', () => {
    test('should render hidden', () => {
        const props = {
            display: false
        }
        const cmp = mount(<ModalBackground {...props} />);
        expect(cmp.exists('.modal-background')).toBe(true)
    });

    test('should render showing', () => {
        const props = {
            display: true
        }
        const cmp = mount(<ModalBackground {...props} />);
        expect(cmp.exists('.modal-background--show')).toBe(true)
    });
});