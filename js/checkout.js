import {
	cartItems
}
from "./user.js";
var items = []
//function to put all cart items in items array
function looper(arraylocation) {
	for (let i = 0; i < arraylocation.length; i++) {
		items.push(arraylocation[i])
	}
}
looper(cartItems.flowers);
looper(cartItems.tools);
//cart.html codes:
var flowerAvailable = false;

function itemCheck(x) {
	var total = 0;
	let elementQuantity = document.querySelector('.quantity')
	let elementTitle = document.querySelector('.title')
	if (x == 'cart') {
		var elementType = document.querySelector('.type')
	}
	let elementAmmount = document.querySelector('.ammount')
	for (let i = 0; i < items.length; i++) {
		//  Quantity of the list
		elementQuantity.innerHTML += `
            <div class="">${i + 1}</div>
        `
		//  title or title(_) judging by the page location
		if (x == 'cart') {
			elementTitle.innerHTML += `
            <div class="">${items[i].title}</div>
        `
		} else {
			elementTitle.innerHTML += `
            <div class="">${items[i].title + "(" + items[i].ammount + ")"}</div>
        `
		}
		//  If its from cart page 'type' will be added
		if (x == 'cart') {
			elementType.innerHTML += `
            <div class="">${items[i].type}</div>
        `
		}
		//  item ammount or price ammount judging by page location
		//? note: the price will be different im just multiplying by 12 just to make sense
		if (x == 'cart') {
			elementAmmount.innerHTML += `
            <div class="">${items[i].ammount}</div>
        `
		} else {
			elementAmmount.innerHTML += `
            <div class="">${items[i].ammount * 12}</div>
        `
		}
		//checking if there is flower item to disable custom bouquet button
		if (items[i].type == 'flower') {
			flowerAvailable = true;
		}
		total += items[i].ammount
	}
	if (x == 'cart') {
		document.querySelector('.total-ammount').innerHTML = total
	} else {
		document.querySelector('.total-ammount').innerHTML = total * 12
	}
	if (x == 'cart') {
		if (!flowerAvailable) {
			document.querySelector('.customBouq').classList.add("disabled");
		} else {
			document.querySelector('.customBouq').addEventListener('click', () => {
				alert('Coming soon');
			})
		}
	}
}
if (window.location.pathname == '/cart.html') {
	itemCheck('cart')
} else if (window.location.pathname == '/confirm.html') {
	itemCheck('confirm')
} else if (window.location.pathname == '/checkout.html') {
	for (let i = 0; i < items.length; i++) {
		document.querySelector('.recheck').innerHTML += `
        <p>
            ${items[i].title} (${items[i].ammount})
        </p>
    `
	}
}