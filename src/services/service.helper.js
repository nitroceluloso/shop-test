const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const get = (url) => {
    return fetch(url, { method: 'get' })
        .then(res => res.json())
}

export const post = (url, data) => {
    return fetch(url, { method: 'post', body: JSON.stringify(data), ...headers })
        .then(res => res.json())
}

export const put = (url, data) => {
    return fetch(url, { method: 'put', body: JSON.stringify(data) , ...headers })
        .then(res => res.json())
}

export const remove = (url, data) => {
    return fetch(url, { method: 'delete', body: JSON.stringify(data), ...headers })
        .then(res => res.json())
}