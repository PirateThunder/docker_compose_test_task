import { SERVER_URL } from "../consts"

export const getLikes = async () => {   
    const res = await fetch(`${SERVER_URL}/likes`)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error(res.statusText)
    }
}

export const patchLikes = async () => {
    const res = await fetch(`${SERVER_URL}/likes`, {method: 'PATCH'})
    if (res.ok) {
        return res.json()
    } else {
        throw new Error(res.statusText)
    }
}