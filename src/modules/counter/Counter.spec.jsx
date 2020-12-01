import React from 'react';
import CounterModule from "./Counter.module";
import { shallow } from "enzyme";

describe('Counter [module]', () => {
    test('should render', () => {
        const mockSuccessResponse = [];
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

        const cmp = shallow(<CounterModule />);
        expect(cmp).toBeDefined();
    });

    test('should call setSelectedIds', () => {
        const mockSuccessResponse = [];
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

        const cmp = shallow(<CounterModule />);
        const inst = cmp.instance();
        inst.setSelectedIds('qqq');
        expect(inst.state.idSelected.size).toBe(1)
    });

    test('should trigger addCounter', () => {
        const responseGet = [];
        const mockJsonPromise = Promise.resolve(responseGet);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

        const cmp = shallow(<CounterModule />);
        const inst = cmp.instance();

        const responsePost = { id:'qwe' };
        const mockJsonPromisePost = Promise.resolve(responsePost);
        const mockFetchPromisePost = Promise.resolve({
            json: () => mockJsonPromisePost,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromisePost);
        inst.addCounter('name').then(() => {
            expect(cmp.state('counterList').length).toBe(1)
        });
    });

    // test('should trigger deleteCounter', () => {
    //     const responseGet = [];
    //     const mockJsonPromise = Promise.resolve(responseGet);
    //     const mockFetchPromise = Promise.resolve({
    //         json: () => mockJsonPromise,
    //     });
    //     global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    //     const cmp = shallow(<CounterModule />);
    //     const inst = cmp.instance();
    //     inst.setState({ counterList: [{id: 'qqq', isSelected: false}] })

    //     const responseDelete = 'qqq';
    //     const mockJsonPromiseDelete = Promise.resolve(responseDelete);
    //     const mockFetchPromiseDelete = Promise.resolve({
    //         json: () => mockJsonPromiseDelete,
    //     });
    //     global.fetch = jest.fn().mockImplementation(() => mockFetchPromiseDelete);
    //     const deleteList = [{id: 'qqq', isSelected: true}];
    //     inst.deleteCounter(deleteList);
    //     expect(inst.state.counterList.length).toBe(0)
    // });
});