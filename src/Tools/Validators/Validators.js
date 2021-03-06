export const required = (value) => {
    if (!value)
        return (
            "Поле обов'язкове")
    else
        return undefined
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length !== minLength)
        return (
            `Потрібно ввести ${minLength} символів`)
    else
        return undefined
}
