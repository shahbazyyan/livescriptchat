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
 
console.log(dropTab);

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


const copyButton = document.querySelector(".copy_btn");
const text_content = document.querySelector(".text_content");

// text_content.forEach.addEventListener("click", function() {
//   const text = text_content.innerText;
  

//   navigator.clipboard.writeText(text);
  
// });

dropTab.addEventListener("click", () => {
  dropTab_content.style.display = "block";
});
dropTab.addEventListener("dblclick", () => {
  dropTab_content.style.display = "none";
});
// copyButton.addEventListener("mouseenter", function() {
//     h5.style.display = "none";
// })

