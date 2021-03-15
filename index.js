const projects = [
  {
    "title": "2dooAgenda",
    "description": "A to-do list application for tracking tasks around the calendar. Created as a product of Angela Yu's Bootcamp in Udemy.",
    "techs": ["Node.js", "Express", "EJS", "MongoDB", "HTML", "CSS", "Bootstrap"],
    "image": "https://i.ibb.co/6gjXbMb/twodooagenda-portfolio.jpg",
    "website": "https://twodooagenda.herokuapp.com/",
    "github": "https://github.com/calmeart/2dooagenda"
  },
  {
    "title": "Loungelite",
    "description": "A wannabe social media site created to exercise session cookies, passport and oauth authentications",
    "techs": ["Node.js", "Express", "Express-session", "Passport", "OAuth", "EJS", "MongoDB", "HTML", "CSS", "Bootstrap"],
    "image": "https://i.ibb.co/Dz82Tdf/loungelite-portfolio.jpg",
    "website": "https://loungelite.herokuapp.com/",
    "github": "https://github.com/calmeart/loungelite"
  },
  {
    "title": "Simon Game",
    "description": "An implementation of the memory skill game invented by Ralph H. Baer and Howard J. Morrison for exercise purposes",
    "techs": ["HTML", "CSS", "JavaScript", "jQuery"],
    "image": "https://i.ibb.co/vkL2zMB/simon-game-portfolio.jpg",
    "website": "https://calmeart.github.io/simon-game/",
    "github": "https://github.com/calmeart/simon-game"
  },
  {
    "title": "JavaScript Calculator",
    "description": "Simple calculator challenge from freeCodeCamp Front End Libraries Projects",
    "techs": ["HTML", "CSS", "React"],
    "image": "https://i.ibb.co/Jmm3g0B/fcc-calculator.jpg",
    "website": "https://codepen.io/calmeart/full/JjKwJyZ"
  },
  {
    "title": "Pomodoro Clock",
    "description": "Pomodoro Clock challenge from freeCodeCamp Front End Libraries Projects",
    "techs": ["HTML", "CSS", "React"],
    "image": "https://i.ibb.co/TTvShtz/fcc-pomodoro-clock.jpg",
    "website": "https://codepen.io/calmeart/full/PoPROja"
  },
  {
    "title": "Random Quote Machine",
    "description": "Random Quote Machine challenge from freeCodeCamp Front End Libraries Projects",
    "techs": ["HTML", "CSS", "React"],
    "image": "https://i.ibb.co/6XGc8LD/fcc-random-quote.jpg",
    "website": "https://codepen.io/calmeart/full/YzyEEyO"
  }
];

document.body.onload = displayProjects;

const sendButton = document.getElementById("contactForm");
sendButton.addEventListener('submit', handleSendMessage);

function listingTechItems(techs) {
  const list = document.createElement("ul");
  list.setAttribute("class", "list-group");

  techs.forEach(item => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "listItem");
    listItem.innerHTML = item;
    list.append(listItem)
  });

  return list;
};

function createProjects(title, description, techs, image, website, github) {

  const cols = document.createElement("div");
  cols.setAttribute("class", "col-xl-4 col-lg-6");

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", website);
  anchor.setAttribute("target", "_blank");

  const projectImage = document.createElement("img");
  projectImage.setAttribute("src", image);
  projectImage.setAttribute("class", "card-img-top");
  projectImage.setAttribute("alt", title + " image");
  projectImage.setAttribute("height", "200px");
  projectImage.setAttribute("width", "400px");

  anchor.append(projectImage);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  if (github) {
    const headerBox = document.createElement("div");
    headerBox.setAttribute("class", "flexHeader");
    headerBox.innerHTML = '<h5 class="card-title">' + title + '</h5><a href=' + github + ' target="_blank"><i class="fab fa-github githubLogo"></i></a>';
    cardBody.append(headerBox);
    const cardBodyText = document.createElement("p");
    cardBodyText.setAttribute("class", "card-text");
    cardBodyText.innerHTML = description;
    cardBody.append(cardBodyText);
  } else {
    cardBody.innerHTML = '<h5 class="card-title">' + title + '</h5><p class="card-text">' + description + '</p>'
  }


  const techList = listingTechItems(techs);
  card.append(anchor, cardBody, techList);
  cols.append(card);

  return cols;
};

function displayProjects() {
  projects.forEach(item => {
    const cols = createProjects(item.title, item.description, item.techs, item.image, item.website, item.github);
    document.getElementById("projectContainer").append(cols);
  })
};

function handleSendMessage(e) {
  document.getElementById("messageSending").style.visibility = "visible";
};




// <div class="col-xl-4 col-lg-6">
//   <div class="card">
//     <a href="https://twodooagenda.herokuapp.com/" target="_blank"><img src="https://i.ibb.co/V2gcXzz/twodooagenda-portfolio.png" class="card-img-top" alt="project image"></a>
//     <div class="card-body">
//       <h5 class="card-title">2dooAgenda</h5>
//       <p class="card-text">A to-do list application for tracking tasks around the calendar. Created as a product of Angela Yu's Bootcamp in Udemy.</p>
//     </div>
//     <ul class="list-group">
//       <li class="listItem">Node.js</li>
//     </ul>
//   </div>
// </div>
