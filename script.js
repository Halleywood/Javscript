import { Book } from './books.mjs';

const book1 = new Book(
    "No Way Home",
    "green",
    250,
    "fiction",
    "November 1st 2021 12:00:00 MST",
    "haven't started yet"
)

const book2 = new Book(
    "a Thousand Leagues",
    "blue",
    550,
    "nonfiction",
    "July 1st 2020 12:00:00 MST",
    "finished"
)

const content=
`   <main class="hello">
        <h1>${book1.title}</h1>
            <ul>
            <li>${book1.coverColor}</li>
            <li>${book1.numberOfPages}</li>
            <li class="hello">${book1.type}</li>
            <li>${book1.status}</li>
            </ul>
    </main>
`
//use JS to insert HTML
document.body.innerHTML=content
//use JS to create new navigation section to the DOM
const navigationbar=`
<li><a href src="#">HOME</a></li>
<li><a href src="#">ABOUT</a></li>
<li><a href src="#">BOOKS</a></li>
<li><a href src="#">CONTACT</a></li>`;

const mainNav = document.createElement("nav")
mainNav.classList.add("main-nav");
const navList = document.createElement("ul")
navList.innerHTML =navigationbar
mainNav.append(navList)

const add = document.querySelector("header")
// add.append(mainNav)


