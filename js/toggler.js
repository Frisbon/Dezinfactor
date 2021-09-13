// JavaScript Document

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const flexopener = document.getElementsByClassName('flex-helper1')[0];
const navbarNav = document.getElementsByClassName('navbar-navHelper')[0];
const navbarBrand = document.getElementsByClassName('navbar-brandHelper')[0];
const backgroundFix = document.getElementsByClassName('bg-custom')[0];
const viberBtnColor = document.getElementsByClassName('custom-button1')[0];
const contactsFix = document.getElementsByClassName('contacts')[0];
const contPaddingFix = document.getElementsByClassName('pd30')[0];

toggleButton.addEventListener('click', () => {
	
	flexopener.classList.toggle('list-menu');
	
	navbarNav.classList.toggle('mg10');
	navbarBrand.classList.toggle('mg20');
	
	backgroundFix.classList.toggle('menu-bg-fix');
	viberBtnColor.classList.toggle('vb-btn-helper');
	contactsFix.classList.toggle('column-helper')
	contPaddingFix.classList.toggle('cancel-pd30')
	
	

	










})
	