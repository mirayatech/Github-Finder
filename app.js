const github = new Github(); // Init Github
const ui = new UI(); // Init UI

const searchUser = document.getElementById("search-user");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // ui.showAlert("User not found", "alert");
      } else {
        ui.showProfile(data.profile); // show profile
      }
    });
  } else {
    ui.clearProfile();
  }
});
