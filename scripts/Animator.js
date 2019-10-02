class Animator{
	constructor(target,action,end,lastAction,speed){
		this.taget=target;
		this.action=action;
		this.end=end;
		this.lastAction=lastAction;
		this.speed=speed;
		this.runAnimation.bind(this);
	}

	runAnimation(){
		for (this.frame=0;this.frame<this.end;this.frame++){
	    setTimeout(this.action, this.speed*i);
	    if(this.frame===this.end-1){
	    	setTimeout(this.lastAction, this.speed*i);
	    }
		}		
	}
}