const nav=document.querySelector('.nav-panel')
window.addEventListener('scroll', fixNav)


function fixNav(){
	if(window.scrollY>nav.offsetHeight+1500) {
		nav.classList.add('active')
	}
}
