
export const get = (url) => {
    return fetch(url, { method: 'get' })
        .then(res => res.json())
}

export const post = (url, data) => {
    return fetch(url, { method: 'post', body: JSON.stringify(data) })
        .then(res => res.json())
}

export const put = (url, data) => {
    return fetch(url, { method: 'put' })
        .then(res => res.json())
}

export const remove = (url, data) => {
    return fetch(url, { method: 'delete', body: JSON.stringify(data) })
        .then(res => res.json())
}