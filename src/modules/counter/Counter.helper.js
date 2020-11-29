export const getListCount = (list) =>
    list.reduce((prev, act) => prev + act.count, 0);