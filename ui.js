class UI {
  constructor() {
    this.profile = document.getElementById('profile');
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
            <li class="list-group-item"><span class="thick">Company:</span> ${user.company}</li>
            <li class="list-group-item"><span class="thick">Website/Blog:</span>  ${user.blog}</li>
            <li class="list-group-item"><span class="thick">Location:</span>  ${user.location}</li>
            <li class="list-group-item"><span class="thick">Member Since:</span>  ${user.created_at}</li>
            </ul>
        
        </div>
    </div>
 </div>
 <h3 class="page-heading">Latest Repos</h3>
 <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-success">Forks: ${repo.forms_count}</span>
        </div>
      </div>
    </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }


  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}