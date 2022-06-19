const searchUser = document.getElementById('search-user')

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== "") {
        console.log(userText)
    }
})