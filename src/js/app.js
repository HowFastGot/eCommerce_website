//<include>================================================================================================================
import "./libs/wNumb.js";
//<include>===============================================================================================================
import * as allFunction from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);

import noUiSlider from 'nouislider';

//<isWebp?>==============================================================================================================
allFunction.isWebp();
//</isWebp?>==============================================================================================================

//<BURGER>==============================================================================================================
let burgerMenu = document.querySelector(".menu__icon");
let menuBody = document.querySelector(".menu__body");

allFunction.burger(burgerMenu, menuBody)
//</BURGER>==============================================================================================================

// Бургер меню page==========================================================================
let burgerPage = document.querySelector(".menu-page__burger");
let pageMenuBody = document.querySelector(".menu-page__body")
allFunction.burger(burgerPage, pageMenuBody)
// Бургер меню page==========================================================================

//==============================================================================================================
let searchPageOpenSelect = document.querySelector(".search-page__openSelect");
let categoties = document.querySelector(".categoties-search");
allFunction.openMenu(searchPageOpenSelect, categoties)
//==============================================================================================================

//<Выбранные категории для поиска>===============================================================================
const searchPage = document.querySelector(".search-page");
const categotiesSearch = document.querySelector(".categoties-search");

categotiesSearch.addEventListener("click" , function(e) {
	e.target.classList.toggle("_active");

	let selectedCategoties = document.querySelectorAll(".checkbox__text._active ");
	
	(selectedCategoties.length <= 0) ? searchPage.classList.remove("_active") 
		: searchPage.classList.add("_active");

	let contentSpan = document.querySelector(".search-page__title").querySelectorAll("span")[1];

	contentSpan.textContent = contentSpan.dataset.text + " " + selectedCategoties.length;

})

//</Выбранные категории для поиска>===============================================================================

//<SWIPER>==============================================================================================================
if (document.querySelector(".swiper")) {

	const swiper = new Swiper('.swiper', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true, 
		speed:1200,
	  // Optional parameters
	  loop: false,
	  // If we need pagination
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },

	  // And if we need scrollbar
	  scrollbar: {
	    el: '.swiper-scrollbar',
	  },
	});
//<BackgroundImageOfPagination>================================
	let mainsliderImages = document.querySelectorAll(".mainslider__image");
	let swiperPaginationsBullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");

	for (let i = 0; i < mainsliderImages.length; i++) {
		const mainsliderImageSrc = mainsliderImages[i].querySelector("img").getAttribute("src");
		swiperPaginationsBullets[i].style.backgroundImage = `url('${mainsliderImageSrc}')`;
	}
//</BackgroundImageOfPagination>================================
}
//<SWIPER>==============================================================================================================

//<Slider products>==============================================================================================================
if (document.querySelector(".item-swiper")) {

	const swiperProducts = new Swiper('.item-swiper', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true, 
		speed:1200,
	  // Optional parameters
		loop: false,
	  // If we need pagination
	  pagination: {
	    el: '.header-products__info',
	    clickable: true,
	    type: "fraction"
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.header-products__arrow_next',
	    prevEl: '.header-products__arrow_prev',
	  },

	  // And if we need scrollbar
	  // scrollbar: {
	  //   el: '.swiper-scrollbar',
	  // },
	});
}
//</Slider products>==============================================================================================================

//<Slider brands>==============================================================================================================
if (document.querySelector(".swiper-brands")) {
	const swiperBrands = new Swiper('.swiper-brands', {
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 10,
		autoHeight: false, 
		speed:1200,
	  // Optional parameters
		loop: false,
	  // If we need pagination
/*	  pagination: {
	    el: '.header-products__info',
	    clickable: true,
	    type: "fraction"
	  },*/
		breakpoints: {
	    320: {
	      slidesPerView: 1,
	      autoHeight: true
	    },
	    560: {
	      slidesPerView: 2,
	    },
	    778: {
	      slidesPerView: 3,
	    },
	    // when window width is >= 480px
	    854: {
	      slidesPerView: 4,
	    },
	    1048: {
	      slidesPerView: 5,
	    },
		},
	  // Navigation arrows
	  navigation: {
	    nextEl: '.brands-page__arrow-right',
	    prevEl: '.brands-page__arrow-left',
	  },
	});
}
//</Slider brands>==============================================================================================================

//<Изминение суммы фильтра>==========================================================================================
// let averageSum = document.getElementsByClassName('noUi-tooltip');

// priceFilter.addEventListener("mousemove", function(e) {
// 	for (let i = 0; i < averageSum.length; i ++) {
// 		averageSum[i].innerHTML = Math.trunc(averageSum[i].innerHTML);
// 	}
// })
//<Изминение суммы фильтра>==========================================================================================

//<Spoller>==============================================================================================================
/*document.addEventListener("click" , function(e) {
	if (e.target?.nextElementSibling?.children.length > 0) {

		if (e.target.classList.contains("_active")) {
			e.target.nextElementSibling.style.display = "none";
			e.target.classList.remove("_active");
			return;
		}

		if (e.target.className === "section-filter__title _spoller") {
			e.target.classList.add("_active");
			e.target.nextElementSibling.style.display = "block";
			return;
		}
	} else {
		e.target.classList.toggle("_active");
	}
})*/
//<Spoller>==============================================================================================================

//<noUIslider>==============================================================================================================
try {
	const priceFilter = document.querySelector(".price-filter");
const rangeInputs = document.querySelectorAll(".manual-range__input");

noUiSlider.create(priceFilter, {
    start: [0, 100000],
    connect: true,
    tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})], //подключили библиотеку wNumb
    range: {
        'min': [0],
        'max': [200000],
    },
});
rangeInputs[0].addEventListener('change', function () {
    priceFilter.noUiSlider.set(rangeInputs[0].value);
});
rangeInputs[1].addEventListener('change', function () {
    priceFilter.noUiSlider.set([rangeInputs[0].value, rangeInputs[1].value]);
    if (rangeInputs[0].value === "") {
        priceFilter.noUiSlider.set([0, rangeInputs[1].value]);
    }
});
//<Открытие фильтра при адаптиве>======================================================================================
	let filterMain = document.querySelector(".page__filter");

	filterMain.addEventListener("click", function(e) {
	    filterMain.classList.toggle("_active");
	});//<Открытие фильтра при адаптиве>======================================================================================
} catch(e) {
	console.log("Поймана" + e.message)
}
//<noUIslider>==============================================================================================================


//<Product-swiper>==============================================================================================================
if (document.querySelector(".product__product-cart")) {

	const productSubSlider = new Swiper('.product__subslider', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		autoHeight: true, 
		speed:800,
		// Optional parameters
		loop: false,
	});

	const productSlider = new Swiper('.product-slider-main', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true, 
		speed:2000,
		// Optional parameters
		loop: false,
		thumbs : {
			switch: productSubSlider,
		}
	});
}
//</Product-swiper>==============================================================================================================


//<Increase-quantyti>==============================================================================================================
if (document.querySelector(".increase-item")) {
	let counters = document.querySelectorAll(".increase-item");
	for (let i = 0; i < counters.length; i ++) {
		let counter = counters[i];

		counter.addEventListener("click", function(e) {
			let input = counter.querySelector("input");

			if (e.target.className == "increase-item__arrow increase-item__arrow_left increase-item__minus") {
				if (input.value <= 1) {
					input.value  = 1;
					return;
				} else {
					input.value = --input.value;
				}
			} else {
				return (input.value < 0) ? input.value = 1: input.value = ++input.value;
			}
		})
	}
}
//</Increase-quantyti>==============================================================================================================

//<Tabs>==============================================================================================================
if (document.querySelector("._tabs")) {
	let btnTabs = document.querySelectorAll(".tabs__btn");
	let blockTabs = document.querySelectorAll(".body-tabs__block");

	btnTabs.forEach(item => {
		item.addEventListener("click", function(e) {
			if (e.target.classList.contains("_active")) return;

			let currentBtn = item;

			btnTabs.forEach(item => {
				item.classList.remove("_active");
			});

			currentBtn.classList.add("_active");

			let currentId = currentBtn.dataset.tab;

			let tabBlock = document.getElementById(currentId.slice(1))

			blockTabs.forEach(item => {
				return item.classList.remove("_active");
			})
			tabBlock.classList.add("_active");
		});
	});

	if (btnTabs.length < 3) {
		document.querySelector(".tabs__btn").dispatchEvent(new Event("click"))
	} else {
		document.querySelector(".tabs__btn:nth-child(3)").dispatchEvent(new Event("click"))
	}
	
}
//</Tabs>==============================================================================================================
