import {
	user
} from './user.js'

function getTimeOfDay() {
	const hour = new Date().getHours();
	return hour < 6 ? "night" : hour < 12 ? "morning" : hour < 18 ? "afternoon" : "night";
}
document.querySelector('.header').innerHTML = `
        Good${ getTimeOfDay() }, 
        </br>
        ${user.name}
`
document.querySelector('.address').innerHTML = `
        ${ user.name }'s home, nestled among a garden of colorful blooms at </br> ${ user.address }
`
document.querySelector('.email').innerHTML = `
        Email address : ${ user.email }
`
document.querySelector('.phone').innerHTML = `
        Phone number : ${ user.phoneNum }
`
document.querySelector('.fav-flower').innerHTML = `
        My favourite flower is : ${ user.favFlower }
`