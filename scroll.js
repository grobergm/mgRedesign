
class ScrollTracker {
	constructor(){
		this.lake = document.querySelector('#lake')
		this.forest = document.querySelector('#forest')
		this.lakePos = lake.getBoundingClientRect();
		this.forestPos = forest.getBoundingClientRect();
		this.getPositions=this.getPositions.bind(this)
		this.freezeLake=this.freezeLake.bind(this)
	}

	getPositions(){
		this.lakePos = lake.getBoundingClientRect();
		this.forestPos = forest.getBoundingClientRect();
		console.log(this.lakePos.top,this.forestPos.top);
		// this.freezeLake()
	}

	freezeLake(){
		if (this.lakePos.top < 0) {
			this.lake.setAttribute("style","background-attachment:fixed")
		}
	}

}


document.addEventListener("DOMContentLoaded", function(){
	const newTracker= new ScrollTracker();
	console.log(newTracker)
	window.addEventListener('scroll',newTracker.getPositions);
});