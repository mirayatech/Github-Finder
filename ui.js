class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    console.log(user);

    this.profile.innerHTML = `
         <div class="card-body">
            <div class="row">
                <div class="primary-column"> 
                    <img class="profile-picture" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank">View Profile</a>
                </div>
                <div class="wrapper-column"> 
                    <div class="secondary-column"> 
                        <span class"badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class"badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class"badge-success"> Followers: ${user.followers}</span>
                        <span class"badge-info">Following: ${user.following}</span>
                    </div>

                    
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
                
            </div>
         </div>
         <h3 class="page-heading">Latest Repos</h3>
         <div id="repos"></div>
         `;
  }
}
