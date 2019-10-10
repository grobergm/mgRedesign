class MouseTracker{
	constructor(size,sectionID){
		this.sectionID=sectionID;
		this.section=document.querySelector(`#${sectionID}`);
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
		this.follower=document.querySelector(`#${sectionID}Follower`);
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
		this.section.classList.remove('expand');
		this.section.addEventListener('mousemove',this.followMouse)
	}
}

class CircleClipper extends MouseTracker{
	constructor(size,sectionID){
		super(size,sectionID)
		this.addMouseListener=this.addMouseListener.bind(this);
		this.clipCircle=this.clipCircle.bind(this);
	}

	addMouseListener(){
		document.addEventListener('mousemove',this.setCurrentPosition)
		document.addEventListener('mousemove',this.clipCircle)
	}

	clipCircle(){
    let circle = `circle(${this.size}px at ${this.xp}px ${this.yp}px)`;
    this.section.style['-webkit-clip-path'] = circle;
    this.section.style['clip-path'] = circle;
		console.log(this.section)
	}
}
