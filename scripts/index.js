class MouseTracker{
	constructor(size,sectionID){
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
		this.toggleExpand=this.toggleExpand.bind(this);
	}

	buttonListeners(){
		this.section.addEventListener('mousemove',this.setCurrentPosition)
		this.section.addEventListener('mousemove',this.followMouse)
		this.follower.addEventListener('click',this.toggleExpand)
	}

	followMouse(){
		if(this.xp<0||this.yp<0){
			this.follower.removeAttribute('style')
		} else {
			this.follower.style.left=`${this.xp}px`;
			this.follower.style.top=`${this.yp}px`;
		}
	}

	toggleExpand(){
		this.section.classList.toggle('expand');
		this.section.scrollIntoView();
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

const sections= ['design','js','blog','data']
document.addEventListener("DOMContentLoaded", function(){
	sections.forEach(section=>{
		const newCircle=new CircleButton(60,section)
		newCircle.buttonListeners()
	})
});
