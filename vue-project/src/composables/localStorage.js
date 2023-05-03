export function getStorage(key) {
    let results = localStorage.getItem(key)
    if (results) {
        return JSON.parse(results)
    } else {
        return []
    }
}

export function storeItem(key, item) {
    let items = getStorage(key)

    items.push(item)

    localStorage.setItem(key, JSON.stringify(items))

    return getStorage(key)
}