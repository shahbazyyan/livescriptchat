const btns = document.querySelectorAll(".tab_btns-item"); 
const contents = document.querySelectorAll(".tab_content-item"); 
const plus = document.querySelector(".plus");
const input = document.querySelector(".script");
const text = document.getElementById("script");
const btn = document.querySelector(".creat_btn");
const myText = document.querySelectorAll("p");
const copy = document.querySelectorAll(".copyy");
const h5 = document.querySelector("h5");
const dropTab = document.querySelector(".dropTab");
const dropTab_content = document.querySelector(".dropTab_content");
const dropTab1 = document.querySelector(".dropTab1");
const dropTab_content1 = document.querySelector(".dropTab_content1");
const dropTab_content2 = document.querySelector(".dropTab_content2");
const dropTab2 = document.querySelector(".dropTab2");
const dropTab_content3 = document.querySelector(".dropTab_content3");
const dropTab3 = document.querySelector(".dropTab3");
const dropTab_content4 = document.querySelector(".dropTab_content4");
const dropTab4 = document.querySelector(".dropTab4");
const myNewScripts = document.querySelector(".myNewScripts");


function tabInit(initial, buttons, contents, contentClassName, buttonsClassName) { 
    contents[initial].classList.add(contentClassName); 
    buttons[initial].classList.add(buttonsClassName); 
 
    for (let i = 0; i < buttons.length; i++) { 
 
        buttons[i].addEventListener("click", function () { 
            for (let x = 0; x < buttons.length; x++) { 
                buttons[x].classList.remove(buttonsClassName); 
                contents[x].classList.remove(contentClassName); 
            } 
            buttons[i].classList.add(buttonsClassName); 
            contents[i].classList.add(contentClassName); 
        }); 
    } 
} 
 
tabInit(0, btns, contents, "active_tab", "active_btn");

plus.addEventListener("click", () => {
  text.style.display = "block"; 
  btn.style.display = "block"; 
});

plus.addEventListener("mouseenter", () => {
  text.style.display = "none"; 
  btn.style.display = "none"; 
});

const copyButton = document.querySelector(".copy_btn");
const text_content = document.querySelector(".text_content");

text_content.addEventListener("click", function() {
  const text = text_content.innerText;
  navigator.clipboard.writeText(text);
  
});

dropTab.addEventListener("click", () => {
  dropTab_content.style.display = "block";
});
dropTab.addEventListener("dblclick", () => {
  dropTab_content.style.display = "none";
});

dropTab1.addEventListener("click", () => {
  dropTab_content1.style.display = "block";
});
dropTab1.addEventListener("dblclick", () => {
  dropTab_content1.style.display = "none";
});

dropTab2.addEventListener("click", () => {
  dropTab_content2.style.display = "block";
});
dropTab2.addEventListener("dblclick", () => {
  dropTab_content2.style.display = "none";
});

dropTab3.addEventListener("click", () => {
  dropTab_content3.style.display = "block";
});
dropTab3.addEventListener("dblclick", () => {
  dropTab_content3.style.display = "none";
});



copyButton.addEventListener("mouseenter", function() {
  h5.style.display = "block";
});

copyButton.addEventListener("mouseleave", function() {
    h5.style.display = "none";
});


btn.addEventListener("click", function () {

 if (text.value === "") {
  alert("Write something!")
 } else {
   let list = document.createElement("p");
   list.innerHTML =  text.value;
   myNewScripts.appendChild(list);
 }
});


document.getElementById("searchButton").addEventListener("click", performSearch);

function performSearch() {
  const searchInput = document.getElementById("searchInput").value;
  const searchResults = document.getElementById("searchResults");

  const regex = new RegExp(searchInput, "g");
  const text = document.getElementById("textToSearch").textContent;
  const matches = text.match(regex);

  if (matches) {
    const highlightedText = text.replace(regex, '<span class="highlight">$&</span>');
    searchResults.innerHTML = highlightedText;
  } else {
    searchResults.innerHTML = "No matches found.";
  }
}