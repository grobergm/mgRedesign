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