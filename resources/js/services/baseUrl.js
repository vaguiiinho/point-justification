
const location = window.location

const baseUrl = `${location.protocol}//${location.hostname}:${location.port}`

let employee = `${baseUrl}/employee`
let justification = `${baseUrl}/justification`

export { employee, justification }
