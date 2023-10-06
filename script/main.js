var div = document.querySelector(".contact");

function irParaLink() {
	window.open("https://wa.link/0o69jt", "_blank");
}

div.addEventListener("click", irParaLink);
// Encontra a div com a classe cascata_img
const cascataImgDiv = document.querySelector(".cascata_img");

// Encontra o elemento com o ID cascata
const cascataElement = document.getElementById("cascata");

// Adiciona um evento de clique à div com a classe cascata_img
cascataImgDiv.addEventListener("click", function () {
	// Rola a página até o elemento com o ID cascata
	cascataElement.scrollIntoView({ behavior: "smooth" }); // Isso suaviza a rolagem
});
// Encontra a div com a classe cascata_img
const orgDiv = document.querySelector(".org_img");

// Encontra o elemento com o ID cascata
const orgElement = document.getElementById("organica");

// Adiciona um evento de clique à div com a classe cascata_img
orgDiv.addEventListener("click", function () {
	// Rola a página até o elemento com o ID cascata
	orgElement.scrollIntoView({ behavior: "smooth" }); // Isso suaviza a rolagem
});
