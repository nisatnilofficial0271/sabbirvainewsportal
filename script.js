const toggleButton = document.querySelector('.toggle');

const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {

	menu.classList.toggle('active');	toggleButton.classList.toggle('active');

});
