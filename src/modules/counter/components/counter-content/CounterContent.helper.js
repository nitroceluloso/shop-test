export const filterCounterArray = (filter, counterArray = []) => counterArray.filter(filterCounterFn(filter));

const filterCounterFn = (filter) => ({ title = '' }) => title.includes(filter);