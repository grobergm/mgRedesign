class Cloud{
	constructor(id,speed){
		this.cloud=document.querySelector(`#${id}`);
		this.speed=speed;
		this.animateClouds=this.animateClouds.bind(this)
		this.makeClouds=this.makeClouds.bind(this)
	}

	animateClouds(){
		this.makeClouds()
		setInterval(this.makeClouds,this.speed*1000);
	}

	makeClouds(){
		this.cloud.style.boxShadow = this.boxShadows(100);
	}

	boxShadows(max) {
		let ret = [];
		for (let i = 0; i < max; ++i) {
			ret.push(`
				${ this.rn(1, 100) }vw ${ this.rn(1, 100) }vh ${ this.rn(20, 40) }vmin ${ this.rn(1, 20) }vmin
				${ this.rs('rgb(200,200,200)', 'rgb(255,255,255)', 'rgb(230,230,230)', 'rgb(220,220,220)') }
			`)
		}
		return ret.join(',');
	}	

	rn(from, to) {
		return ~~(Math.random() * (to - from + 1)) + from;
	}

	rs() {
		return arguments[this.rn(1, arguments.length) - 1];
	}

}

