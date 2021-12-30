import { today } from './utils-javascript'

export const UNSAFE_today = () => {
    const day = new Date
    return day.getUTCMinutes() % 2 === 0 ? day : null
}

const maybeToday = UNSAFE_today()

export const TS_OUTPUT = `Hello TS, the date is ${ maybeToday ? 
    maybeToday.toDateString() : today().toDateString()
}`
