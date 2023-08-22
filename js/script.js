/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";
/**
 *  Light and dark mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | string} */ isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");

}

else{
    $HTML.dataset.theme = isDark ? "dark"  : "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}


const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);

}

$themeBtn.addEventListener("click", changeTheme);

/**
 * TAB
 */

const /**{NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */ [lastActiveTab] =document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {

        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /** {NodeElement} */ $tabContent = document.querySelector(`
        [data-tab-content ="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbx27j249JPypZzIWzdp34gIsN2x3XA3_m4WaGNrHrKMEvHWVxslFu4msECJL6OC0CExIw/exec'
  const form = document.forms['submit-to-google-sheet']
 
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

form.addEventListener('submit' , function() {
    form.rest();
});
