const randomUser = document.querySelector(".table_user");

//создаем функцию которая будет за нас создавать элементы, тем самым облегчая нашу работу

const elemUs = (tag, atr, userName, text, elem, userImg, elem2, ava) => {
    const el = document.createElement(tag);
    el.setAttribute(atr, userName);
    el.textContent = text;

    //создаем элементы
    el.setAttribute(elem, userImg);
    el.setAttribute(elem2, ava);
    return el;
};


fetch(`https://randomuser.me/api/?results=8`)

    //Получаем информацию и создаем userTable, пробегаясь по объекту
    .then(response => response.json())
    .then(data => data.results.forEach((user) => {

        //создаем элементы в контеинере из полученных объектов при помощи elemUs

        const userTable = elemUs("div", "class", "userTable");

        const randomUserName = elemUs("p", "class", "user-name", `${user.name.last} ${user.name.first}`);

        const randomUserAvatar = elemUs("img", "src", `${user.picture.large}`, null, "class", "user-avatar", "alt", `${user.name.title}`);

        userTable.appendChild(randomUserName);
        userTable.appendChild(randomUserAvatar);

        randomUser.appendChild(userTable);
    }));