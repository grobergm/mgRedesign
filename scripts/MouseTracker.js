class MouseTracker{
	constructor(size,sectionID){
		this.duration=duration;
		this.interval;
		this.section=document.querySelector(`#${sectionID}`);
		this.mouseX=0;
		this.mouseY=0;
		this.xAdjust=0;
		this.yAdjust=0;
		this.size=size;
		this.startFollowing=this.startFollowing.bind(this)
		this.stopFollowing=this.stopFollowing.bind(this)
	}

	mouseMoveListener(){
		this.sectionID.addEventListener('mousemove',event=>{
			this.mouseX= event.pageX-(this.size/2)
			this.mouseY= event.pageY-(this.size/2)
		})
	}

	startFollowing(follower){
		this.interval=setInterval(()=>{
			this.xAdjust+=((this.mouseX - xAdjust)/(this.size/10));
			this.yAdjust+=((this.mouseY - yAdjust)/(this.size/10));
			follower.setAttribute('style',
				`top:${this.mouseY}px;
				left:${this.mouseX}px`)
		},20)
	}
	stopFollowing(){
		clearInterval(this.interval)
	}
}

class CircleButton extends MouseTracker{
	constructor(size,color,sectionID){
		super(size,sectionID);
		this.size=size;
		this.color=color;
		this.sectionID=sectionID;
		this.follower;
	}

	buttonListeners(){
		this.sectionID.addEventListener('mouseenter',this.createFollower)
		this.sectionID.addEventListener('mouseleave',this.destroyFollower)
		this.follower.addEventListener('click',clickExpand)
	}

	createFollower(){
		const follower=document.createElement('span')
		follower.innerHTML=this.secctionID;
		follower.setAttribute('id',`${this.sectionID}Follower`)
		follower.setAttribute('style',`
			background-color:${this.color};
			height:${this.size}px;
			width:${this.size}px;
			border-radius:50%;
			position:absolute;`)
		this.follower=follower;
		this.startFollowing(follower)
	}

	destroyFollower(){
    this.follower.parentNode.removeChild(this.follower);
	}

	toggleExpand(){
		this.section.classList.toggle('expand');
		this.section.scrollIntoView();
	}
}

class CircleClipper{
	constructor(){

	}
}