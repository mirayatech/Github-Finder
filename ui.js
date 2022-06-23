class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display profile in UI
  showProfile(user) {
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
            <li class="list-group-item company"><span class="thick">Company:</span> ${user.company}</li>
            <li class="list-group-item blog"><span class="thick">Website/Blog:</span> <a href="${user.blog}" target="_blank">${user.blog}</a>  </li>
            <li class="list-group-item location"><span class="thick">Location:</span>  ${user.location}</li>
            <li class="list-group-item member-since"><span class="thick">Member Since: </span>${convertTime(user.created_at)}</li>
            </ul>
        
        </div>
    </div>
 </div>
 <h3 class="page-heading">Latest Repos</h3>
 <div id="repos">
 
 </div>
    `;

    if (user.company == null) {
      document.querySelector(".company").innerHTML =
        '<li class="list-group-item company"><span class="thick">Company:</span>	&nbsp; <span class="yellow">No Details Provided</span></li>';
    }

    if (user.blog == undefined || user.blog == "") {
      document.querySelector(".blog").innerHTML =
        '<li class="list-group-item blog"><span class="thick">Website/Blog:</span>	&nbsp; <span class="yellow">No Details Provided</span></li>';
    }

    if (user.blog == undefined || user.blog == "") {
      document.querySelector(".location").innerHTML =
        '<li class="list-group-item company"><span class="thick">Location:</span>	&nbsp; <span class="yellow">No Details Provided</span></li>';
    }

    if (user.blog == undefined || user.blog == "") {
      document.querySelector(".member-since").innerHTML =
        '<li class="list-group-item company"><span class="thick">Member Since:</span>	&nbsp; <span class="yellow">No Details Provided</span></li>';
    }
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
      <div class="alert-div"></div>
      <div class="card-repo">
      <div class="row">
        <div class="repo-wrapper">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-repo">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
        </div>
      </div>
    </div>
      `;
    });
    document.getElementById("repos").innerHTML = output;
  }

 

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
