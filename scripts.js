function expand(target){
	target.classList.toggle('expand');
	document.querySelector('#under-forest').scrollIntoView()
};



document.addEventListener("DOMContentLoaded", function(){
	// circle needs to have the expand click listener if over mouse
	const circle=document.querySelector('#circleFollow');
	const mainContent=document.querySelector('#under-forest');
	function circleFollow(event){
		let x= event.clientX-30;
		let y= event.clientY-30;
		circle.setAttribute('style',`top:${y}px;left:${x}px`);
	}
	mainContent.addEventListener('mousemove',circleFollow)
});

