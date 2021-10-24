//имитация будущего json'а
let heroes = [
    {
        name: `Бэтмен`,
        universe: `DC Comics`,
        alter: `Брюс Уэйн`,
        job: `борец с преступностью, филантроп, миллиардер`,
        friends: `Робин, Бэтгерл`,
        powers: `интеллект, обширные познания, знания боевых искусств, ловкость`,
        likes: "no",
        pic: `pics/batman.jpg`
},

    {
        name: `Супермен`,
        universe: `DC Comics`,
        alter: `Кларк Кент`,
        job: `борец за справедливость`,
        friends: "собака Крипто",
        powers: `непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм`,
        likes: "no",
        pic: `./pics/superman.jpg`
    },

    {
        name: `Железный человек`,
        universe: `Marvel Comics`,
        alter: `Тони Старк`,
        job: `гений, миллиардер, плейбой, филантроп`,
        friends: `мстители`,
        powers: `высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, костюмы`,
        likes: "no",
        pic: `./pics/ironman.jpg`
    },

    {
        name: `Человек-паук`,
        universe: `Marvel Comics`,
        alter: `Питер Паркер`,
        job: `борец за справедливость, студент, фотограф`,
        friends: `Мстители, Фантастическая четверка, Люди Икс`,
        powers: `высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы`,
        likes: "no",
        pic: `./pics/spiderman.jpg`
    },

    {
        name: `Капитан Америка`,
        universe: `Marvel Comics`,
        alter: `Стивен Роджерс`,
        job: `супер-солдат`,
        friends: `Мстители`,
        powers: `сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя`,
        likes: "no",
        pic: `./pics/captain.jpg`
    },

    {
        name: `Тор`,
        universe: `Marvel Comics`,
        alter: `Тор Одинсон`,
        job: `борец за справедливость, скандинавский бог`,
        friends: `Мстители`,
        powers: `все, что может бог, плюс молот Мьелнир`,
        likes: "no",
        pic: `./pics/tor.jpg`
    },

    {
        name: `Чудо-женщина`,
        universe: `DC Comics`,
        alter: "Диана Принс",
        job: `супергероиня, секретарь-референт`,
        friends: `Мстители`,
        powers: `сверхчеловеческая сила искорость, выносливость, полет`,
        likes: "no",
        pic: `./pics/wonder.jpg`
    },

    {
        name: `Черная вдова`,
        universe: `arvel Comics`,
        alter: `Наташа Романофф`,
        job: `супергероиня, шпионка`,
        friends: `Мстители`,
        powers: `пик человеческого физического потенциала, замедленное старение, знание многих языков`,
        likes: "no",
        pic: `./pics/widow.jpg`
    },

    {
        name: `Дэдпул`,
        universe: `Marvel Comics`,
        alter: `Уэйд Уинстон Уилсон`,
        job: `антигерой, наемник`,
        friends: `частично Мстители, Человек-паук, Росомаха`,
        powers: ` высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система`,
        likes: "no",
        pic: `./pics/deadpool.jpg`
    }

]

//ака json
const heroesArr = JSON.stringify(heroes);
//ака распарсили
heroes = JSON.parse(heroesArr);
const container = document.querySelector("#container");
//массив для localStorage

let favHeroes = localStorage.getItem("heroes") ? localStorage.getItem("heroes").split(",") : [];



function createCard(hero) {
    
    const card = document.createElement("div");
    container.appendChild(card);
    card.setAttribute("class", "card");
    card.setAttribute("id", `${hero.name}Card`);

    const pic = document.createElement("img");
    pic.setAttribute("class", "pic");
    pic.setAttribute("src", `${hero.pic}`);
    pic.setAttribute("alt", `${hero.name}`);
    card.appendChild(pic);

    const info = document.createElement("div");
    info.setAttribute("class", "info");
    card.appendChild(info);

    const title = document.createElement("h3");
    info.appendChild(title);
    title.setAttribute("class","title");
    title.innerHTML = `Имя: ${hero.name}`;

    const universe = document.createElement("p");
    info.appendChild(universe);
    universe.setAttribute("class", "universe");
    universe.innerHTML = `Вселенная: ${hero.universe}`;

    const alter = document.createElement("p");
    info.appendChild(alter);
    alter.innerHTML = `Альтер-эго: ${hero.alter}`;

    const job = document.createElement("p");
    info.appendChild(job);
    job.innerHTML = `Род деятельности: ${hero.job}`;

    const friends = document.createElement("p");
    info.appendChild(friends);
    friends.innerHTML = `Друзья: ${hero.friends}`;

    const powers = document.createElement("p");
    info.appendChild(powers);
    powers.innerHTML = `Суперсилы: ${hero.powers}`;

    const like = document.createElement("div");
    like.setAttribute("class", "like");
    card.appendChild(like);
    // like.innerHTML = hero.likes;
    savedFav = localStorage.getItem("heroes") || '';
    if (savedFav.includes(`${hero.name}Card`)) {
        like.classList.add("fav");
        like.innerHTML = "yes";
    } else like.innerHTML = "no";
    console.log("saved", savedFav);
    like.addEventListener("click", likeHeroes)
    
}

for (item of heroes) {
    createCard(item);
}

function likeHeroes(event) {
        const item = event.target;
        if (item.innerHTML === "no") {
            item.innerHTML = "YES!";
            item.classList.add("fav");
            //добавить в базу
            favHeroes.push(item.closest("div[id]").id);
            localStorage.setItem("heroes", favHeroes);
            console.log(favHeroes);
        } else {
            item.innerHTML = "no";
            item.classList.remove("fav");
            //удалить из базы
            favHeroes = favHeroes.filter( (heroName) => {return heroName != item.closest("div[id]").id} );
            localStorage.setItem("heroes", favHeroes);
            console.log(favHeroes);
        }
    
}


