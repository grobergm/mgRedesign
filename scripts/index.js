document.addEventListener("DOMContentLoaded", function(){
	const sections= ['design','js','blog','data']
	sections.forEach(section=>{
		const newCircle=new CircleButton(60,section)
		newCircle.buttonListeners()
	})

	const topCloud = document.querySelector('#top-cloud');
	const mist1 = document.querySelector('#mist1');
	const mist2 = document.querySelector('#mist2');
	const mist3 = document.querySelector('#mist3');
	refreshClouds(topCloud,60)
	refreshClouds(mist1,90)
	refreshClouds(mist2,35)
	refreshClouds(mist3,15)

	const introText = document.querySelector('#intro-text');
	const introOptions = ["I make pixels come to life","Communicate. Design. Program.","I think outside of the box.","Looking for a developer with skills?","If you can imagine it, I can make it."]
	function resetIntroText(){
		introText.innerHTML=introOptions[Math.floor(Math.random()*introOptions.length)]
	}
	resetIntroText()
	setInterval(resetIntroText,13800)
});
