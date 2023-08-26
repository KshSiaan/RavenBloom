//?                                                   Resources
//Favourite resources
const favPics = [
	'/assets/favFlower (1).jpg',
	'/assets/favFlower (2).jpg',
	'/assets/favFlower (3).jpg',
	'/assets/favFlower (4).jpg',
	'/assets/favFlower (5).jpg',
	'/assets/favFlower (6).jpg'
];
const favNameList = [
	'Rose',
	'Sunflower',
	'Tulip',
	'Lily',
	'Daisy',
	'Orchids'
]
//Sales resources
const salePics = [
	'/assets/saleFlower (1).jpg',
	'/assets/saleFlower (2).jpg',
	'/assets/saleFlower (3).jpg'
]
//Extra resources
const extraList = [
	'Craft a one-of-a-kind bouquet just for you!',
	'The Art of Floral Design: Discover Our Handcrafted and Customizable Arrangements!',
	'Celebrate with Flowers: Find Our Premium Event Services Here!',
	'Contact us for your personal interest and planning'
]
//?                                               Favourite section
for (let i = 0; i < favPics.length; i++) {
	//pushing Card in range of array
	document.querySelector('.fav-container').innerHTML += `
  <div class="fav-card">
  
      <img class="fav-img">
      <div class="fav-name"></div>
  
  </div>
  `
	const favImg = document.getElementsByClassName("fav-img")
	const favName = document.getElementsByClassName("fav-name")
	favImg[i].setAttribute('src', favPics[i])
	favName[i].innerHTML = favNameList[i]
}
//?                                               Sale section
for (let i = 0; i < salePics.length; i++) {
	//pushing Card in range of array
	document.querySelector('.sale-container').innerHTML += `
  <div class="sale-card">
  
  </div>
  `
	document.getElementsByClassName("sale-card")[i].style.backgroundImage = `url('${salePics[i]}')`
}
//?                                                Extra section
for (let i = 0; i < extraList.length; i++) {
	document.querySelector('.extra-container').innerHTML += `
            <li>${extraList[i]}</li>
  `
}
