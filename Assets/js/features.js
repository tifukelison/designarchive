let showContactBtn = document.querySelector('.contactbtn');
showContactBtn.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelector('.contact').style.display = 'inline-block';
})

let exitContactBtn = document.querySelector('.exitContact');
exitContactBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	document.querySelector('.contact').style.display = 'none';
})