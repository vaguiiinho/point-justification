const location = window.location

export default {
    HOST: `${location.protocol}//${location.hostname}:${location.port}`,
    get Employee() {
        return `${this.HOST}/employee`
    }
}
