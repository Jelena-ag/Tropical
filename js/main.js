const nav = document.querySelector('.nav__items');
const navBtn = document.querySelector('.burger-btn');
const NavItems = document.querySelectorAll('.nav__item');

const showNav = () => {
	nav.classList.toggle('nav--active');

	NavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	showNavItemsAnimation();
	deleteAnimation();
};

const showNavItemsAnimation = () => {
	let delayTime = 0;

	NavItems.forEach(item => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const deleteAnimation = () => {
	NavItems.forEach(item => {
		item.addEventListener('click', () => {
			NavItems.forEach(el => {
				el.classList.remove('nav-items-animation');
			});
		});
	});
};

navBtn.addEventListener('click', showNav);
