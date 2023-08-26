//?                 SideBar collapsible
var coll = document.querySelectorAll(".collapsible-header");
var i;
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.parentNode.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}
//?             Showcase content
//We can keep the product of the page as object so that it will be easy to analyze and add to cart
var productInHand = {
	name: "",
	//More info here //?{ not wasting my time to add a lot of product and functionality}
}
var page = '';
window.onload = () => {
	page = "Rose"
	pageChange(page)
}

function pageChange(x) {
	let paging = document.querySelector('.paging')
	let pageType;
	if (window.location.pathname == "/flower.html") {
		pageType = "Flowers"
	} else {
		pageType = "Tools"
	}
	if (x instanceof HTMLElement) {
		page = x.innerHTML
		paging.innerHTML = pageType + " > " + page
	} else {
		paging.innerHTML = pageType + " > " + x
	}
	productChange(page);
}

function productChange(x) {
	//We can change product info of the page here
}
const intro = document.querySelector('.intro')
//? The logic here is the stored datas will come and dynamically be added
//The data
let flowerData = {
	name: 'Rose',
	meaning: 'Love,Honor,Faith,Beauty,Balance,Passion,Wisdom',
	describe: 'Rose, the quintessential flower of love and beauty, is a timeless classic that exudes elegance and charm in any arrangement.',
	more: "Roses are one of the most popular flowers in the world, and for good reason. With their delicate petals, alluring fragrance, and vivid colors, roses have come to symbolize love, beauty, and passion. As a classic choice for floral arrangements, roses can be used in a variety of settings, from weddings to funerals, and everything in between. They are available in many different colors, including red, pink, yellow, white, and even black, each with its own unique meaning and symbolism. For example, red roses are often associated with romantic love, while yellow roses are a symbol of friendship and joy. With their versatile beauty, it's no wonder that roses remain a perennial favorite for florists and flower enthusiasts alike. Whether presented in a simple vase or as part of a more elaborate arrangement, roses have a way of capturing the heart and inspiring wonder and admiration in all who behold them.",
	images: ['/assets/rose (1).jpg', '/assets/rose (2).jpg', '/assets/rose (3).jpg']
}
let toolData = {
	name: 'Watering can',
	meaning: 'Watering tool',
	describe: 'Fill the watering can with water from a nearby source, such as a hose or rain barrel.',
	more: "",
	images: ['/assets/tool (1).jpg', '/assets/tool (2).jpg', '/assets/tool (3).jpg']
}
//depending on the pathName which can be flower.html or
if (window.location.pathname == "/flower.html") {
	intro.children[0].innerHTML = flowerData.name
	intro.children[1].innerHTML = flowerData.meaning
	intro.children[2].innerHTML = flowerData.describe
	let showProduct = document.querySelector('.show-product')
	showProduct.innerHTML = ""
	for (let i = 0; i < flowerData.images.length; i++) {
		showProduct.innerHTML += `
    <img src="${flowerData.images[i]}" alt="">
    `
	}
	document.querySelector('.exploreDetail').innerHTML = flowerData.more
} else if (window.location.pathname == "/tools.html") {
	intro.children[0].innerHTML = toolData.name
	intro.children[1].innerHTML = toolData.meaning
	intro.children[2].innerHTML = toolData.describe
	let showProduct = document.querySelector('.show-product')
	showProduct.innerHTML = ""
	for (let i = 0; i < toolData.images.length; i++) {
		showProduct.innerHTML += `
    <img src="${toolData.images[i]}" alt="">
    `
	}
}
//ammounter
function ammounter(x) {
	let ammount = document.querySelector('.ammount')
	console.log(ammount);
	if (x == 'increase') {
		ammount.innerHTML = parseInt(ammount.innerHTML) + 1
	} else if (x == 'decrease') {
		ammount.innerHTML = parseInt(ammount.innerHTML) - 1
	} else {
		console.error('Ammount is not working');
	}
}
//ExploreFurther toggle
let exploreDisplay = document.querySelector('.exploreView')

function exploreToggle(x) {
	if (x == 'open') {
		exploreDisplay.style.display = "block"
	} else {
		exploreDisplay.style.display = "none"
	}
}