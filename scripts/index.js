class MouseTracker{
	constructor(size,sectionID){
		this.sectionID=sectionID;
		this.section=document.querySelector(`#${sectionID}`);
		this.follower=document.querySelector(`#${sectionID}Follower`);
		this.xp=0;
		this.yp=0;
		this.size=size;
		this.setCurrentPosition=this.setCurrentPosition.bind(this)
	}

	setCurrentPosition(event){
		const rect= this.section.getBoundingClientRect();
		this.xp= event.pageX-(this.size/2)-rect.x;
		this.yp= event.pageY-(this.size/2)-rect.y;
	}

}

class CircleButton extends MouseTracker{
	constructor(size,sectionID){
		super(size,sectionID);
		this.buttonListeners=this.buttonListeners.bind(this);
		this.followMouse=this.followMouse.bind(this);
		this.resetPosition=this.resetPosition.bind(this);
		this.expandSection=this.expandSection.bind(this);
		this.collapseSection=this.collapseSection.bind(this);
	}

	buttonListeners(){
		this.section.addEventListener('mousemove',this.setCurrentPosition)
		this.section.addEventListener('mousemove',this.followMouse)
		this.section.addEventListener('mouseleave',this.resetPosition)
		this.follower.addEventListener('click',this.expandSection)
		document.querySelector(`#${this.sectionID} .collapse`).addEventListener('click',this.collapseSection)
	}

	followMouse(){
		this.follower.style.left=`${this.xp}px`;
		this.follower.style.top=`${this.yp}px`;
	}

	resetPosition(){
		this.follower.removeAttribute('style');
		this.collapseSection();
	}

	expandSection(){
		this.section.classList.add('expand');
		this.section.scrollIntoView();
		this.section.removeEventListener('mousemove',this.followMouse)
	}

	collapseSection(){
		console.log('collapse')
		this.section.classList.remove('expand');
		this.section.addEventListener('mousemove',this.followMouse)
	}
}

class CircleClipper extends MouseTracker{
	constructor(size,sectionID){
		super(size,sectionID)
		this.size=size;
	}

	clipCircle(){
    let circle = `circle(${this.size}px at ${this.xp}px ${this.yp}px)`;
    this.section.style['-webkit-clip-path'] = circle;
    this.section.style['clip-path'] = circle;
	}
}

function rn(from, to) {
  return ~~(Math.random() * (to - from + 1)) + from;
}

function rs() {
  return arguments[rn(1, arguments.length) - 1];
}

function boxShadows(max) {
  let ret = [];
  for (let i = 0; i < max; ++i) {
    ret.push(`
      ${ rn(1, 100) }vw ${ rn(1, 100) }vh ${ rn(20, 40) }vmin ${ rn(1, 20) }vmin
      ${ rs('rgb(200,200,200)', 'rgb(255,255,255)', 'rgb(230,230,230)', 'rgb(220,220,220)') }
    `)
  }
  return ret.join(',');
}

function makeClouds(cloud) {
  cloud.style.boxShadow = boxShadows(100);
}

function refreshClouds(cloud,fps){
	cloudMove(cloud,fps)
	setInterval(()=>{
		cloudMove(cloud,fps)
	},230*fps)	
}

function cloudMove(cloud,fps){
	makeClouds(cloud)
	let position=-100
	for (let i=0;i<=230;i++){
		setTimeout(()=>{
			position++
			cloud.style.left=`${position}vw`
		},fps*i)
	}
}

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
});
