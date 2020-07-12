export const required = (value) => {
    if (!value) return 'Field is required'
    return undefined
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength || value.length > minLength) return `You need to enter ${minLength} symbols`
    return undefined
}
