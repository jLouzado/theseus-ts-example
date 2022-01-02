export const today_NEW = () => {
    return new Date
}

export const UNSAFE_today = () => {
    const day = new Date
    return day.getUTCMinutes() % 2 === 0 ? day : null
}

const maybeToday = UNSAFE_today()

export const TS_OUTPUT = `Hello T   S, the date is ${ maybeToday ? 
    maybeToday.toDateString() : today_NEW().toDateString()
}`
