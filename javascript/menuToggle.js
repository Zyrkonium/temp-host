const menuOverlay = document.querySelector(".menuOverlay");
const menuShowTrigger = document.querySelectorAll(".menu--phone__trigger");
const menuCloseTrigger = document.querySelector(".overlay__close");

menuShowTrigger.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		menuOverlay.classList.add("visible");
	});
});

menuCloseTrigger.addEventListener("click", (e) => {
	menuOverlay.classList.remove("visible");
});
