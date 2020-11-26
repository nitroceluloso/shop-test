export const validateIfActive = (flag, cb = () => {}) =>
    () => { !flag && cb() }