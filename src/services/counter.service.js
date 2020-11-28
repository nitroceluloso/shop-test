import { get, post, put, remove } from "./service.helper";

const RESOURCE_PATH = 'api/v1/counter';

export const getCounterList = () => get(RESOURCE_PATH);

export const createCounter = (data) => post(RESOURCE_PATH, data);

const INC_PATH = '';
const DEC_PATH = '';
export const updateCounter = () => {

}

export const deleteCounter = (data) => remove(data);