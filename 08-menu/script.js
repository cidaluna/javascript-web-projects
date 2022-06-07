// itens

const menu = [
    {
        id:1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:2,
        title: "sed do eiusmod",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-2.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:3,
        title: "ipsum dolor",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-3.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:4,
        title: "Lorem ipsum dolor",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-4.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:5,
        title: "dry-transfer sheets",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-5.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:6,
        title: "sed do eiusmod tempor",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-6.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:7,
        title: "labore et dolore",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-7.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:8,
        title: "laboreincididunt ut ",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-8.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        laboreincididunt ut  et dolore magna aliqua. `,
    },
    {
        id:9,
        title: " magna aliqua",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-9.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:10,
        title: "tempor it on",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-10.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    }
]

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
        //console.log(item);
        return `<h1>${item.title}</h1>`;
    });
    console.log(displayMenu);
});