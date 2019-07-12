
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreater () {
  const doggies = [];

  for (let i = 0; i < Object.keys(dogs).length; i++) {
    let link = document.createElement('a'); // <a>
    link.innerHTML = Object.keys(dogs)[i]; // dog.innerHTML = "Corgi"
    link.setAttribute('href', dogs[link.innerHTML]); // <a href="https://ihwdoihd.com"></a>
    
    let listEl = document.createElement('li'); // creates <li></li>
    listEl.classList.add('dog-link'); // adds dog-link class to each <li>
 
    listEl.append(link); //  <li class="dog-link"><a href="dog link"></a></li>
    doggies.push(listEl); // add completed links to dog list
  };
  return doggies
}



function attachDogLinks(){ // 
  let dogLinks = dogLinkCreater(); // array o

  for (let i = 0; i < dogLinks.length; i++) {
    let list = document.getElementsByClassName('drop-down-dog-list');
    // console.log(list)
    list[0].appendChild(dogLinks[i]);
  }
}

const toggle = document.getElementById("drop-down-toggle"); // <h3>
const navigation = document.getElementsByClassName("drop-down-dog-nav"); //<nav>

navigation[0].addEventListener("mouseenter", e => {
  handleEnter(e);
});

navigation[0].addEventListener("mouseleave", e => {
  handleLeave(e);
});

function handleEnter (event) {
  let list = document.getElementsByClassName('drop-down-dog-list'); //
  list[0].classList.add("show-drop-down");
  list[0].classList.remove("drop-down-dog-list");
}

function handleLeave (event) {
  // debugger;
  let list = document.getElementsByClassName("show-drop-down");
  list[0].classList.add("drop-down-dog-list");
  list[0].classList.remove("show-drop-down");
}

attachDogLinks();






// when we hover over any list items d