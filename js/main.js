const nav = document.querySelector('.nav__items');
const navBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const showNav = () => {
	nav.classList.toggle('nav--active');
	// navBtnBars.classList.remove('black-bars-color');
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	showNavItemsAnimation();
	deleteAnimation();
};

const showNavItemsAnimation = () => {
	let delayTime = 0;

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const deleteAnimation = () => {
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.forEach(el => {
				el.classList.remove('nav-items-animation');
			});
		});
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60 &&
			!nav.classList.contains('nav--active')
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', showNav);
window.addEventListener('scroll', handleObserver);
