//Lets say user.js is out User data we got from backend
const user = {
	name: 'Sharif Ahmed',
	address: 'Rajshahi',
	email: 'dummyemail123@email.com',
	phoneNum: '0123456789',
	favFlower: 'Daisy'
}
//got data from both shop pages
const cartItems = {
	flowers: [{
			title: 'Rose',
			type: 'flower',
			ammount: 10
		},
		{
			title: 'Daisy',
			type: 'flower',
			ammount: 35
		}
	],
	tools: [{
		title: 'Hoe',
		type: 'tool',
		ammount: 2
	}]
}
export {
	user,
	cartItems
}