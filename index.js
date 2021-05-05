// write your code here!
// This variable has the data you're working with

console.log(data);

function pokemonCard(name, src) {
  let sectionEl = document.querySelector(".cards");

  let articleEl = document.createElement("article");
  console.log(articleEl.setAttribute("class", "card"));

  sectionEl.appendChild(articleEl);

  //create title
  let h2TitleEl = document.createElement("h2");
  h2TitleEl.setAttribute("class", "card--title");
  h2TitleEl.innerText = name;

  articleEl.appendChild(h2TitleEl);

  let imgEl = document.createElement("img");
  imgEl.src = src;

  articleEl.appendChild(imgEl);
}

for (let i = 0; i < data.length; i++) {
  pokemonCard(
    data[i].name,
    data[i].sprites.other["official-artwork"].front_default
  );
}
