const menu = document.querySelector(".menu");
const menuIcon = menu.children[0]
const navSidebar = document.querySelector(".nav-sidebar");
menu.addEventListener('click', () => {
	navSidebar.classList.toggle("open")
	if (menuIcon.classList.value == 'bi bi-list') {
		menuIcon.classList.value = 'bi bi-x'
	} else {
		menuIcon.classList.value = 'bi bi-list'
	}
})
let sidebarDropActivator = (x) => {
	let dropDownElement = x.parentElement.querySelector('.sidebar-dropdown')
	dropDownElement.classList.toggle("open")
}

//A pretty console


console.log("%cGood luck developer \u{1F340}",
"background-color:inherit;color:#f6f6f6;padding:24px 48px;font-size:18px;border:solid 2px #f6f6f6;");

