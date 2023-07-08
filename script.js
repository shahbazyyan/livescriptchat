const btns = document.querySelectorAll(".tab_btns-item"); 
const contents = document.querySelectorAll(".tab_content-item"); 
const plus = document.querySelector(".plus");
const input = document.querySelector(".script");
const text = document.getElementById("script");
const btn = document.querySelector(".creat_btn");
const copy = document.querySelectorAll(".copyy");
// const h5 = document.querySelector("h5");
const dropTab = document.querySelectorAll(".dropTab");
const dropTab_content = document.querySelectorAll(".dropTab_content");
const myNewScripts = document.querySelector(".myNewScripts");
const img = document.querySelectorAll("img");


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

plus.addEventListener("dblclick", () => {
  text.style.display = "none"; 
  btn.style.display = "none"; 
});

// const copyButton = document.querySelector(".copy_btn");
// const text_content = document.querySelector(".text_content");

// text_content.addEventListener("click", function() {
//   const text = text_content.innerText;
//   navigator.clipboard.writeText(text);
  
// });


for (let i = 0; i < dropTab.length; i++) {
  dropTab[i].addEventListener("click", () => {
    dropTab_content[i].style.display = "block";
  });
  dropTab[i].addEventListener("dblclick", () => {
    dropTab_content[i].style.display = "none";
  });
}







// copyButton.addEventListener("mouseenter", function() {
//   h5.style.display = "block";
// });

// copyButton.addEventListener("mouseleave", function() {
//     h5.style.display = "none";
// });


btn.addEventListener("click", function () {

 if (text.value === "" || text.value === "Պատուհանը չի կարող դատարկ լինել") {
  script.innerText = "Պատուհանը չի կարող դատարկ լինել";
 } else {
   let list = document.createElement("p");
   list.innerHTML =  text.value;
   myNewScripts.appendChild(list);
 }
});


// document.getElementById("searchButton").addEventListener("click", performSearch);

// function performSearch() {
//   const searchInput = document.getElementById("searchInput").value;
//   const searchResults = document.getElementById("searchResults");

//   const regex = new RegExp(searchInput, "g");
//   const text = document.getElementById("textToSearch").textContent;
//   const matches = text.match(regex);

//   if (matches) {
//     const highlightedText = text.replace(regex, '<span class="highlight">$&</span>');
//     searchResults.innerHTML = highlightedText;
//   } else {
//     searchResults.innerHTML = "No matches found.";
//   }
// }

const text_content = document.querySelectorAll("p")


for (let i = 0; i < text_content.length; i++) {
    text_content[i].addEventListener("click", function (){
        const text = text_content[i].innerText;
        navigator.clipboard.writeText(text);
    } )
}


// for (let i = 0; i < text_content.length; i++) {
//   text_content[i].addEventListener("mouseover", function (){
//    h5.style.display = "block";

//   })
// }



