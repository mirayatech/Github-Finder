class Github {
  constructor() {
    this.client_id = "066ac25e4386eb5b9e58s";
    this.client_secret = "e5def700a2959f95738ff003ab390f90af74029a";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      profile,
    };
  }
}
