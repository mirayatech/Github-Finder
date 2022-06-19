const github = new Github();

const searchUser = document.getElementById("search-user");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    console.log(userText);
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // show profile
      }
    });
  }
});
