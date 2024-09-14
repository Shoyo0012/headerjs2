
const nav = document.querySelector("nav");
const mobileDiv = document.querySelector(".mobile");


const handleScroll = () => {
if (window.scrollY > 60) {
nav.classList.add("scrolled");
mobileDiv.classList.add("scrolled1");
} else {
nav.classList.remove("scrolled");
mobileDiv.classList.remove("scrolled1");
}
};

window.addEventListener("scroll", handleScroll);


function toggleMenu(displaystate) {
 const nav = document.getElementById('headernavigation');
 const closeIco = document.getElementById('close-ico');

 nav.style.display = displaystate;
 closeIco.style.display = displaystate;

}