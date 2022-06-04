const reviews = [
    {
      id: 1,
      name: "Sara J.",
      job: "Web Developer JS",
      img:
        "./images/sara.jpg",
      info:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      id: 2,
      name: "Jhon W.",
      job: "UX Designer",
      img:
      "./images/jhon.jpg",
        info:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Letraset used it on their dry-transfer sheets.`,
    },
    {
      id: 3,
      name: "Julia M.",
      job: "Web Developer Senior",
      img:
        "./images/julia.jpg",
      info:
      `The passage experienced a surge in popularity during the 1960s when 
      Letraset used it on their dry-transfer sheets.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 4,
      name: "Ruth A.",
      job: "IT Manager",
      img:
        "./images/ruth.jpg",
      info:
      `Lorem ipsum dolor, sed do eiusmod tempor it on their dry-transfer sheets.
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    }
  ];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function (){
    showPerson();
});

//show person based on item array
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}

// show next person
nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});
