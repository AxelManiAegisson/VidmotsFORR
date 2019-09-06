
var btn = document.getElementById('btn');
//Spilar animation þegar ýtt er á takkann.
btn.onclick = function(){
	var playAnim = anime({
		targets: 'svg',
		translateY: [
			{value: 200, duration: 500},
			{value: 0, duration: 800}
		],
		rotate:'1turn'
	});
};