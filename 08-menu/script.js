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
        category: "lunch",
        price: 15.99,
        img: "./images/item-2.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:3,
        title: "ipsum dolor",
        category: "shakes",
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
        category: "lunch",
        price: 15.99,
        img: "./images/item-5.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:6,
        title: "sed do eiusmod tempor",
        category: "shakes",
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
        category: "lunch",
        price: 15.99,
        img: "./images/item-8.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        laboreincididunt ut  et dolore magna aliqua. `,
    },
    {
        id:9,
        title: " magna aliqua",
        category: "shakes",
        price: 15.99,
        img: "./images/item-9.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    },
    {
        id:10,
        title: "tempor it on",
        category: "dinner",
        price: 15.99,
        img: "./images/item-10.jpeg",
        desc: `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
        incididunt ut labore et dolore magna aliqua. `,
    }
]

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}