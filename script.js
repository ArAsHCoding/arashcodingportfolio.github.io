const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
scrollToTopBtn.addEventListener("click", scrollToTop);

const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
	ul.classList.toggle("show");
});

navLink.forEach((link) =>
	link.addEventListener("click", () => {
		ul.classList.remove("show");
	})
);

scrollUp.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});