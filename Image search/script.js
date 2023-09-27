let searchbox = document.querySelector(".searchbox");
let searchbtn = document.querySelector(".searchbtn");
let imagecontainer = document.querySelector(".imagecontainer");
let showmorebtn = document.querySelector(".show-more-btn");

let Api_key = "60S4Y0PC708JC_2pv4yRGKEAdY-ASM3PrRDOEII2aVk";
let page = 1;
let keyword = "";

searchbtn.addEventListener("click", (e) => {
  console.log(searchbox.value);
  e.preventDefault();
  getImage();
});

async function getImage() {
  keyword = searchbox.value;
  let raw = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Api_key}&per_page=12`
  );
  let data = await raw.json();
  console.log(data);
  let results = data.results;
  if (page == 1) {
    imagecontainer.innerHTML = "";
  }

  results.map((result) => {
    let image = document.createElement("img");
    image.src = result?.urls?.small;
    let link = document.createElement("a");
    link.href = result?.links?.html;
    link.target = "_blank";
    link.appendChild(image);
    imagecontainer.appendChild(link);
  });
  showmorebtn.classList.add("active");
}

showmorebtn.addEventListener("click", () => {
  page++;
  getImage();
});
