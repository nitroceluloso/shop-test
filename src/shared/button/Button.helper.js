const classNameByStyle = new Map([
    ['call-action', 'button--primary'],
    ['action', 'button--secondary'],
    ['default', 'button'],
    ['pill', 'button--pill'],
    ['danger', 'button--danger']
]);

export const getClassName = (style) => classNameByStyle.get(style);