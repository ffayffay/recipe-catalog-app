let recipes = [
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
	{
		title: 'Title',
		img: 'https://via.placeholder.com/250x125.png',
	},
]



function tileTemplate(recipe) {
	let template = `
		<div class="tile">
			<div class="img-wrap">
				<img src="${recipe.img}">
			</div>

			<div class="tile-title-wrap">
				<p class="title">${recipe.title}</p>
			</div>
		</div>
	`
	return template
}


function displayHtml() {
	const galleryDiv = document.querySelector('.gallery-wrap');

	let recipesToVIew = recipes.map(recipe => tileTemplate(recipe)).join('');
	galleryDiv.innerHTML = recipesToVIew;
}

displayHtml()