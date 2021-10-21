const getUserId = document.querySelector("#getUserId");
const result = document.querySelector("#resultMessage");

getUserId.addEventListener("click", function() {
    document.querySelector("#userInfo").classList.add("hidden")
    const userId = document.querySelector("#userId").value || "LenaYork";
    console.log(userId);
    fetch(`https://api.github.com/users/${userId}`)
    .then(resp => {
        result.innerHTML = resp.ok ? `<p class="success">Пользователь найден!</p>` : '<p class="failure">Пользователь не найден</p>'
        if (resp.ok) {
            document.querySelector("#userInfo").classList.remove("hidden")
        }
        return resp.json()
    })
    .then(res => {
        document.querySelector("#userPic").setAttribute("src", `${res.avatar_url}`)
        document.querySelector("#userName").innerHTML = res.name ? `${res.name}` : "Не указано"
        document.querySelector("#userCompany").innerHTML = res.company ? `${res.company}` : "Не указано"
        document.querySelector("#userLocation").innerHTML = res.location ? `${res.location}` : "Не указано"
        document.querySelector("#userEmail").innerHTML = res.email ? `${res.email}` : "Не указано"
        document.querySelector("#userBio").innerHTML = res.bio ? `${res.bio}` : "Не указано"
        document.querySelector("#userRepos").innerHTML = res.public_repos ? `${res.public_repos}` : "Не указано"
        document.querySelector("#userFollowers").innerHTML = res.followers ? `${res.followers}` : "Не указано"
        document.querySelector("#userFollowing").innerHTML = res.following ? `${res.following}` : "Не указано"
        document.querySelector("#userCreated").innerHTML = res.created_at ? `${res.created_at.slice(0, 10)}` : "Не указано"
        document.querySelector("#userChanged").innerHTML = res.updated_at ? `${res.updated_at.slice(0, 10)}` : "Не указано"
        // console.log(res);
    })     
});