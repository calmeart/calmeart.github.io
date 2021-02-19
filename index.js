const projects = [{
    "title": "Loungelite",
    "description": "A wannabe social media site created to exercise session cookies, passport and oauth authentications",
    "techs": ["Node.js", "Express", "Express-session", "Passport", "OAuth", "EJS", "MongoDB", "HTML", "CSS", "Bootstrap"],
    "image": "https://i.ibb.co/NLLK5tR/loungelite-portfolio.png",
    "website": "https://loungelite.herokuapp.com/"
  },
  {
    "title": "2dooAgenda",
    "description": "A to-do list application for tracking tasks around the calendar. Created as a product of Angela Yu's Bootcamp in Udemy.",
    "techs": ["Node.js", "Express", "EJS", "MongoDB", "HTML", "CSS", "Bootstrap"],
    "image": "https://i.ibb.co/V2gcXzz/twodooagenda-portfolio.png",
    "website": "https://twodooagenda.herokuapp.com/"
  },
  {
    "title": "Simon Game",
    "description": "An implementation of the memory skill game invented by Ralph H. Baer and Howard J. Morrison for exercise purposes",
    "techs": ["HTML", "CSS", "JavaScript", "jQuery"],
    "image": "https://i.ibb.co/prq7np1/simon-game-portfolio.png",
    "website": "https://calmeart.github.io/simon-game/"
  },
  {
    "title": "JavaScript Calculator",
    "description": "Simple calculator challenge from freeCodeCamp Front End Libraries Projects",
    "techs": ["HTML", "CSS", "React"],
    "image": "https://i.ibb.co/6mt2jtP/fcc-calculator.png",
    "website": "https://codepen.io/calmeart/full/JjKwJyZ"
  },
  {
    "title": "Pomodoro Clock",
    "description": "Pomodoro Clock challenge from freeCodeCamp Front End Libraries Projects",
    "techs": ["HTML", "CSS", "React"],
    "image": "https://i.ibb.co/rcrYpCf/fcc-pomodoro-clock.png",
    "website": "https://codepen.io/calmeart/full/PoPROja"
  },
  {
    "title": "Random Quote Machine",
    "description": "Random Quote Machine challenge from freeCodeCamp Front End Libraries Projects",
    "techs": ["HTML", "CSS", "React"],
    "image": "https://i.ibb.co/WWnMXZP/fcc-random-quote.png",
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

function createProjects(title, description, techs, image, website) {

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
  projectImage.setAttribute("alt", title + "image");

  anchor.append(projectImage);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  cardBody.innerHTML = '<h5 class="card-title">' + title + '</h5><p class="card-text">' + description + '</p>'

  const techList = listingTechItems(techs);
  card.append(anchor, cardBody, techList);
  cols.append(card);

  return cols;
};

function displayProjects() {
  projects.forEach(item => {
    const cols = createProjects(item.title, item.description, item.techs, item.image, item.website);
    document.getElementById("projectContainer").append(cols);
  })
};

function handleSendMessage(e) {
  if (!isValid) {
    e.preventDefault(); //stop form from submitting
  } else {
    document.getElementById("messageSending").style.visibility = "visible";
  }
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
