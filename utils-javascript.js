/**
 * @deprecated use "today_NEW" from utils_typescript instead
 */
export const today = () => {
    return new Date
}

export const JS_OUTPUT = `Hello JS, today is ${today().toDateString()}`
