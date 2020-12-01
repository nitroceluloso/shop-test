
export const actionWrapper = (id, amount, cb = () => {}) =>
    [
        () => { cb(id, true) },
        () => { amount !== 0 && cb(id, false) }
    ];