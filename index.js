// write your code here!
// This variable has the data you're working with

console.log(data);

function pokemonCard(pokemon) {
  let sectionEl = document.querySelector(".cards");

  //create article class="card"
  let articleEl = document.createElement("article");
  articleEl.setAttribute("class", "card");
  sectionEl.appendChild(articleEl);

  //create title
  let h2TitleEl = document.createElement("h2");
  h2TitleEl.setAttribute("class", "card--title");
  h2TitleEl.innerText = pokemon.name;
  articleEl.appendChild(h2TitleEl);

  //create img
  let pokemonImg = pokemon.sprites.other["official-artwork"].front_default;

  let imgEl = document.createElement("img");
  imgEl.style.width = "256px";
  imgEl.style.marginLeft = "50px";
  imgEl.style.marginRight = "50px";
  imgEl.style.border = "0.1px solid lightgrey";
  imgEl.src = pokemonImg;
  articleEl.appendChild(imgEl);

  //create div class="card--text"
  let divEl = document.createElement("div");
  divEl.setAttribute("class", "card--text");
  divEl.setAttribute("ID", "card-text");
  articleEl.appendChild(divEl);

  for (const statObject of pokemon.stats) {
    let pokemonParagraf = pokemonP(statObject.stat.name, statObject.base_stat);
    divEl.appendChild(pokemonParagraf);
  }
}

function pokemonP(text, stat) {
  let p = document.createElement("p");
  p.setAttribute("class", "");
  p.innerText = `${text}: ${stat}`;
  return p;
}

for (const pokemon of data) {
  pokemonCard(pokemon);
}
