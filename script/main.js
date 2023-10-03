// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
	var x = e.clientX;
	var y = e.clientY;
	cursorinner.style.left = x + "px";
	cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
	cursor.classList.add("click");
	cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
	cursor.classList.remove("click");
	cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
	item.addEventListener("mouseover", () => {
		cursor.classList.add("hover");
	});
	item.addEventListener("mouseleave", () => {
		cursor.classList.remove("hover");
	});
});
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
