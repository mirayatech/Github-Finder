class Github {
    constructor() {
        this.client_id = '790bfae2ae0fddd8fec3'
        this.client_secret = '61f765db53cf0c3e5877bf6b676ebc850db5448a'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}