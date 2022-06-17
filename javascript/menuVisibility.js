const main = document.querySelector("main");
const menu = document.querySelector(".menu");
const menu_scroll = document.querySelector(".menu.menu--scroll");

document.addEventListener("scroll", (e) => {
	if (window.scrollY > 10) {
		// menu.classList.add('hidden')
		menu_scroll.classList.remove("hidden");
		console.log("scroll");
	} else {
		menu_scroll.classList.add("hidden");
		//     menu.classList.remove('hidden')
		console.log("origin");
	}
	// const menuHeight = document.querySelector('.menu:not(.hidden)').clientHeight
	// main.style.setProperty('padding-top', `${menuHeight}px`)
});
