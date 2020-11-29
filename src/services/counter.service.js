import { get, post, remove } from "./service.helper";

const RESOURCE_PATH = 'api/v1/counter';

export const getCounterList = () => get(RESOURCE_PATH);

export const createCounter = (data) => post(RESOURCE_PATH, data);

const INC_PATH = 'api/v1/counter/inc';
const DEC_PATH = 'api/v1/counter/dec';
export const updateCounter = (id, inc = true) => {
    const url = inc ? INC_PATH : DEC_PATH;
    return post(url, { id });
}

export const deleteCounter = (id) => remove(RESOURCE_PATH, {id});