var navBar = document.getElementById("nav2");
var div3 = document.getElementById("div3");



window.onscroll = function(data){
	if ((document.body.scrollTop >= div3.offsetTop || document.documentElement.scrollTop >= div3.offsetTop)
		&& (document.body.scrollTop <=  div3.offsetTop + div3.clientHeight || document.documentElement.scrollTop <= div3.offsetTop - div3.clientHeight)){
		console.log("got it")
	}
	else{
		
	console.log("not in the div")
	}
};