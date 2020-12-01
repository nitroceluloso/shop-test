export const getListCount = (list = []) =>
    list.reduce((prev, act) => prev + act.count, 0);

export const setCounterListSelected = (idList = new Set()) =>
    (counterList = []) =>
        counterList.map((el) => ({ ...el, isSelected: idList.has(el.id) }))
