// ! ДЗ 32. div - привид

// Є текстове поле на сторінці.
// Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає


const titleHover = document.querySelector("h1");

const box = document.querySelector("div")
titleHover.onmouseenter = () => box.classList.add("box");
titleHover.onmouseleave = () => box.classList.remove();







// ! ДЗ 33. Таблиця


// Вивести таблицю 10 × 10, заповнену числами від 1 до 100(таблиця створюється динамічно)


// const container = document.createElement("div");
// container.classList.add("container");

// for (let i = 1; i <= 100; i++) {
//     const item = document.createElement("div");
//     item.classList.add("item");
//     item.innerText = `${i}`;
//     container.append(item);
// }

// document.body.append(container);


// ! ДЗ 34. Виведення зображень

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином(Math.random)

// ! способ 1

// function random() {
//     return Math.floor(Math.random() * (9 - 1)) + 1;
// }
// console.log(random());

// const img = document.querySelector("#image");
// img.setAttribute("src", `images/${random()}.jpg`);
// img.setAttribute("width", "100%");
// img.setAttribute("alt", "auto");

// ! способ 2

// function random() {
//     return Math.floor(Math.random() * (9 - 1)) + 1;
// }
// console.log(random());

// const img = document.querySelector("#image");

// img.src = `images/${random()}.jpg`;
// img.width = "1000";
// img.alt = "auto";

