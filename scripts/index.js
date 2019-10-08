function startTyping(target,text){
	target.innerHTML='';
  for (let i=0;i<text.length;i++){
    setTimeout(()=>{
      target.innerHTML+=text.charAt(i);
    }, 120*i);
  }
}

function randomIntroText(){
	const introOptions = [
		"I make websites come to life.",
		"Design. Program. Test. Deploy.",
		"I think outside of the box.",
		"Looking for a developer with mad skills?",
		"If you can imagine it, I can make it.",
		"My name is Matt, and I make websites.",
		"You're in luck, I'm looking for work!"]
	return introOptions[Math.floor(Math.random()*introOptions.length)]
}

document.addEventListener("DOMContentLoaded", function(){
	const sections= ['design','js','blog','data']
	sections.forEach(section=>{
		const newCircle=new CircleButton(60,section)
		newCircle.buttonListeners()
	})

	const topCloud= new Cloud('top-cloud',10);
	const mist1= new Cloud('mist1',13);
	const mist2= new Cloud('mist2',9);
	const mist3= new Cloud('mist3',5);
	topCloud.makeClouds();
	mist1.makeClouds();
	mist2.makeClouds();
	mist3.makeClouds();




	const aboutBtn = document.querySelector('#aboutBtn');
	const projectsBtn = document.querySelector('#projectsBtn');
	const contactBtn = document.querySelector('#contactBtn');
	aboutBtn.addEventListener("click",()=>{slideContent('left')})
	projectsBtn.addEventListener("click",()=>{slideContent('middle')})
	contactBtn.addEventListener("click",()=>{slideContent('right')})
	const slider = document.querySelector('#slideContent');

	function slideContent(position){
		slider.className=position;
	}

	const introText = document.querySelector('#intro-text');
	startTyping(introText,randomIntroText())
	setInterval(()=>{startTyping(introText,randomIntroText())},10000)

});
