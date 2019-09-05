var btn = document.getElementById('btn');

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