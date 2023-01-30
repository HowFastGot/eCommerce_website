// Функция проверяет поддерживает ли браузер формат изображения .webp==========================
export function isWebp() {
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function() {
			callback(webP.height == 2);
		};
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}
	testWebp(function(support) {
		let className = (support === true) ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	});
}

//<BURGER>==============================================================================================================
export function burger(burger, body) {
	burger.onclick = function(e) {
		burger.classList.toggle("_active");
		body.classList.toggle("_active");

		if (burger.classList.includes("menu-page__burger")) return;

		document.body.classList.toggle("_lock");
	}
}
//_________________________________________________________________________//
// Cоздаем функцию которая закрывает бургер при нажатии на меню и переходе к пункту
export function closeBurger(menuBody, burger) {
	menuBody.classList.remove("_active");
	burger.classList.remove("_active");
	document.body.classList.remove("_lock");
}
//</BURGER>==============================================================================================================

//<>==============================================================================================================
export function openMenu(elem, categoties) {
	elem.onclick = function(e) {
		elem.parentElement.classList.toggle("_active");
		if (window.getComputedStyle(categoties).display == "none") {
			categoties.style.display = "block";
			return;
		} else {
			categoties.style.display = "none";
		}
	}
}
//<>==============================================================================================================
