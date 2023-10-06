document.querySelector(".menu_btn").addEventListener("click", () => {
	document.querySelector(".menu_window").classList.toggle("active");
});
document.querySelector(".menu_window").addEventListener("click", () => {
	document.querySelector(".menu_window").classList.remove("active");
});
var menuLinks = document.querySelectorAll(".menu_link");
menuLinks.forEach((el) => {
	el.addEventListener("click", () => {
		document.querySelector(".menu_window").classList.remove("active");
	});
});
var div = document.querySelector(".contact");

function irParaLink() {
	window.open("https://wa.link/0o69jt", "_blank");
}

div.addEventListener("click", irParaLink);
