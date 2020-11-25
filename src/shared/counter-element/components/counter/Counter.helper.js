
export const actionWrapper = (id, amount, cb = () => {}) =>
    [
        () => { cb(id, true, amount) },
        () => { cb(id, false, amount) }
    ];