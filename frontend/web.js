var globalScalingFactor = .6
var c
c = document.getElementById("wordweb");
c.width = c.offsetWidth;
c.height = c.offsetHeight;

var ctx

setDefaultView = function(){
	ctx.setTransform(
		1.0119992278780352,
		0,
		0,
		1.0119992278780352,
		20.144126420245993,
		0.32101987756787453)
}

window.onload = function(){
	ctx = c.getContext("2d");
	trackTransforms(ctx);
	setDefaultView()
}

window.onresize = function(){

	c.width = c.offsetWidth;
	c.height = c.offsetHeight;
	redraw();
	setDefaultView()
}

$('#wrapper').scrollLeft(600);
$('#wrapper').scrollTop(800);

function setCookie(cname,cvalue,exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	  {
	  var c = ca[i].trim();
	  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

if (getCookie('user') != ""){
	var data = {};
	data.name = getCookie('user');
	window.socket.emit('loginToMainWebsite', data);
} else {
	failedLogin()
}

window.socket.on('loginReturn', function(data){
	if (data == 'Success') {
		requestPuzzleProgress()
		$('#createUser').fadeOut();
	} else {
		failedLogin()
	}
});

function failedLogin(){
	$('#createUser').fadeIn();
}

$('#createUser').keypress(function (e) {
  if (e.which == 13) {
  	window.socket.emit('registerUser', $('#userCreation').val());
  	setCookie('user', $('#userCreation').val(), 365)
	var data = {};
	data.name = getCookie('user');
	window.socket.emit('loginToMainWebsite', data);
  	return false;
  }
});

function requestPuzzleProgress(){
	window.socket.emit("requestPuzzleProgress")
}

function drawLine(x1, y1, x2, y2, item1, item2){

	var xs = x1 + c.width/2;
	var ys = y1 + c.height/2;

	var xe = x2 + c.width/2;
	var ye = y2 + c.height/2;


	ctx.beginPath();


	var c1 = 'hsl('+item1.hue+','+item1.sat+'%,'+item1.light+'%)';
	var c2 = 'hsl('+item2.hue+','+item2.sat+'%,'+item2.light+'%)';

	var grad= ctx.createLinearGradient(xs, ys, xe, ye);
	grad.addColorStop(0, c1);
	grad.addColorStop(1, c2);


	if (item1.sat == 100){
		ctx.strokeStyle  = c1;
	} else if (item2.sat == 100){
		ctx.strokeStyle  = c2;
	} else {
		ctx.strokeStyle = grad;
	}

	ctx.moveTo(xs, ys);
	ctx.lineTo(xe, ye);
	ctx.stroke();
}

function drawText(x, y, text, item1){
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.font = "bold 28px Arial";
	textwidth = ctx.measureText(text).width + 10;
	textheight = 28 + 10;

//	Rectangle
	ctx.beginPath();
	ctx.rect(x + c.width/2 - textwidth/2, y + c.height/2 - textheight/2, textwidth, textheight);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.strokeStyle = 'hsl('+item1.hue+','+item1.sat+'%,'+item1.light+'%)';
	ctx.stroke();
//

	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.font = "bold 28px Arial";
	ctx.fillText(text, x + c.width/2, y + c.height/2);
}

$('#GuessId').keypress(function (e) {
  if (e.which == 13) {
  	window.socket.emit('webRequest', $('#deviceGuess').val());
  	return false;
  }
});

var totalMap = {}
window.socket.on('puzzleState', function(data){
	totalMap.web = data.web
	totalMap.validIndexes = data.validIndexes
	totalMap.wordweb = data.wordweb
	updateMap(data.web, data.validIndexes);
});
window.socket.on('puzzleUpdate', function(data){
	totalMap.web = data.web
	totalMap.validIndexes = data.validIndexes
	totalMap.wordweb = data.wordweb
	redraw()
});

removeGuestClasses = function(){
	window.setTimeout(function() {
		$('#GuessId').removeClass('has-error')
		$('#GuessId').removeClass('has-success')
		$('#GuessId').removeClass('has-warning')
	}, 1000);
}
window.socket.on('isAnswerCorrect', function(data){
	if (data){
	  	$('#deviceGuess').val("");
	  	$('#GuessId').addClass('has-success')
	  	$('#instructions').slideUp()
	} else {
	  	$('#deviceGuess').val("");
	  	$('#GuessId').addClass('has-error')
	}
	removeGuestClasses()
});
window.socket.on('answerAlreadyThere', function(data){
  	$('#deviceGuess').val("");
  	$('#GuessId').addClass('has-warning')
  	removeGuestClasses()
});

checkIfClicked = function (web, updateList, factor){
	if (clickedPoint.isClicked){
		for (var i=0; i<web.length; i++){
			if (updateList.indexOf(i) != -1){
				if (clickedPoint.x > web[i].x*factor -110&& clickedPoint.y > web[i].y*factor - 30){
					if (clickedPoint.x < web[i].x*factor +110 && clickedPoint.y < web[i].y*factor + 30){
						clickedPoint.lasti = i
						if (web[i].sat != 100){
							clickedPoint.lastLight = web[i].light;
							clickedPoint.lastSat = web[i].sat;
							web[i].light = 50;
							web[i].sat = 100;
						}
					}
				}
			}
		}
	}
}

function updateMap(web, updateList){
	var factor = globalScalingFactor
	checkIfClicked(web, updateList,factor);
	for (var i=0; i<web.length; i++){
		if (updateList.indexOf(i) != -1){
			for (var j=0; j < web[i].connections.length; j++){
				if (updateList.indexOf(web[i].connections[j]) != -1){
					drawLine(web[i].x * factor, web[i].y * factor, web[web[i].connections[j]].x * factor, web[web[i].connections[j]].y * factor, web[i], web[web[i].connections[j]]);
				}
			}
		}
	}
	for (var i=0; i<web.length; i++){
		if (updateList.indexOf(i) != -1){
			drawText(web[i].x * factor, web[i].y * factor, web[i].word, web[i])
		}
	}
}
var redraw = function(){
	// Store the current transformation matrix
	ctx.save();

	// Use the identity matrix while clearing the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, c.width, c.height);

	// Restore the transform
	ctx.restore();
	updateMap(totalMap.web, totalMap.validIndexes);
	percent = totalMap.wordweb.length / totalMap.web.length;
	if (percent > .3){
		$("#percentage").fadeIn();
		$("#percentage").html("" +  Math.floor(percent*100*100)/100 + "%")
	}
}

var clickedPoint = {isClicked: false, lasti : -1};
var lastX=c.width/2, lastY=c.height/2;
var dragStart,dragged;

mouseDown = function(evt){
	document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
	lastX = evt.offsetX || (evt.pageX - c.offsetLeft);
	lastY = evt.offsetY || (evt.pageY - c.offsetTop);
	dragStart = ctx.transformedPoint(lastX,lastY);
	dragged = false;
}
mouseMove = function(evt){
	lastX = evt.offsetX || (evt.pageX - c.offsetLeft);
	lastY = evt.offsetY || (evt.pageY - c.offsetTop);
	dragged = true;
	if (dragStart){
		var pt = ctx.transformedPoint(lastX,lastY);
		ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
		redraw();
	}
    evt.stopPropagation();
}
mouseUp = function(evt){
	dragStart = null;
	// if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
	if (!dragged){
		clickedPoint.isClicked = true;

		var pt = ctx.transformedPoint(lastX,lastY);
		clickedPoint.x = pt.x - c.width/2
		clickedPoint.y = pt.y - c.height/2

		web = totalMap.web
		factor = globalScalingFactor;
		if (clickedPoint.lasti != -1){
			i = clickedPoint.lasti;
			if (clickedPoint.x > web[i].x*factor -110&& clickedPoint.y > web[i].y*factor - 30){
				if (clickedPoint.x < web[i].x*factor +110 && clickedPoint.y < web[i].y*factor + 30){
					clickedPoint.isClicked = false;
				}
			}
			totalMap.web[clickedPoint.lasti].light = clickedPoint.lastLight;
			totalMap.web[clickedPoint.lasti].sat = clickedPoint.lastSat;
			clickedPoint.lasti = -1;
		}
		redraw()
	}
}

c.addEventListener('mousedown',mouseDown,false);
c.addEventListener('mousemove',mouseMove,false);
c.addEventListener('mouseup',mouseUp,false);

c.addEventListener("touchstart", mouseDown, false);
c.addEventListener("touchend", mouseUp, false);
// c.addEventListener("touchcancel", mouseEnd, false);
// c.addEventListener("touchleave", mouseEnd, false);
c.addEventListener("touchmove", mouseMove, false);

var scaleFactor = 1.1;
var zoom = function(clicks){
	var pt = ctx.transformedPoint(lastX,lastY);
	ctx.translate(pt.x,pt.y);
	var factor = Math.pow(scaleFactor,clicks);
	ctx.scale(factor,factor);
	ctx.translate(-pt.x,-pt.y);
	redraw();
}

var handleScroll = function(evt){
	var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
	if (delta) zoom(delta);
	return evt.preventDefault() && false;
};
c.addEventListener('DOMMouseScroll',handleScroll,false);
c.addEventListener('mousewheel',handleScroll,false);


// Adds ctx.getTransform() - returns an SVGMatrix
// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
function trackTransforms(ctx){
	var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
	var xform = svg.createSVGMatrix();
	ctx.getTransform = function(){ return xform; };

	var savedTransforms = [];
	var save = ctx.save;
	ctx.save = function(){
		savedTransforms.push(xform.translate(0,0));
		return save.call(ctx);
	};
	var restore = ctx.restore;
	ctx.restore = function(){
		xform = savedTransforms.pop();
		return restore.call(ctx);
	};

	var scale = ctx.scale;
	ctx.scale = function(sx,sy){
		xform = xform.scaleNonUniform(sx,sy);
		return scale.call(ctx,sx,sy);
	};
	var rotate = ctx.rotate;
	ctx.rotate = function(radians){
		xform = xform.rotate(radians*180/Math.PI);
		return rotate.call(ctx,radians);
	};
	var translate = ctx.translate;
	ctx.translate = function(dx,dy){
		xform = xform.translate(dx,dy);
		return translate.call(ctx,dx,dy);
	};
	var transform = ctx.transform;
	ctx.transform = function(a,b,c,d,e,f){
		var m2 = svg.createSVGMatrix();
		m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
		xform = xform.multiply(m2);
		return transform.call(ctx,a,b,c,d,e,f);
	};
	var setTransform = ctx.setTransform;
	ctx.setTransform = function(a,b,c,d,e,f){
		xform.a = a;
		xform.b = b;
		xform.c = c;
		xform.d = d;
		xform.e = e;
		xform.f = f;
		return setTransform.call(ctx,a,b,c,d,e,f);
	};
	var pt  = svg.createSVGPoint();
	ctx.transformedPoint = function(x,y){
		pt.x=x; pt.y=y;
		return pt.matrixTransform(xform.inverse());
	}
}