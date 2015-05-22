// codekit-prepend "lib/Modernizr.js"
// @codekit-prepend "../../bower_components/snap.svg/dist/snap.svg-min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/TweenLite.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/plugins/BezierPlugin.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/easing/EasePack.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/TimelineLite.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/plugins/cssPlugin.min.js"
// @codekit-prepend "../../bower_components/rocket/src/js/kit.js"

ready(function(){

	var 
		snapRain1 = Snap('#rain1'),
		snapRain2 = Snap('#rain2'),
		snapRain3 = Snap('#rain3'),
		snapRain4 = Snap('#rain4'),
		snapRain5 = Snap('#rain5'),
		snapRain6 = Snap('#rain6'),
		snapRain7 = Snap('#rain7'),
		snapRain8 = Snap('#rain8'),
		snapRain9 = Snap('#rain9'),
		snapRain10 = Snap('#rain10'),
		snapWater = Snap('#water'),
		pauseBtn = k('#toggle')
		;

		var 
		dot = "M476,525 C481.399961,525 482,522.537566 482,519.5 C482,516.462434 479.313708,514 476,514 C472.686292,514 470,516.462434 470,519.5 C470,522.537566 470.600039,525 476,525 Z",
		water = "M74.5,300 C115.645214,300 149.649034,289.857808 149,277.5 C147.326376,245.63369 144.820105,210.330359 133.633746,168.668587 C125.845766,139.663522 23.7329194,138.189647 15.3900449,164.875833 C3.40171339,203.222669 2.23328305e-16,235.80249 0,277.5 C3.78746097e-16,289.926407 33.3547861,300 74.5,300 Z",
		rain1 = "M190,0.5 L378,529.5",
		rain2 = "M170,0.5 L358,529.5",
		rain3 = "M150,0.5 L338,529.5",
		rain4 = "M130,0.5 L318,529.5",
		rain5 = "M100,0.5 L288,529.5",
		rain6 = "M80,0.5 L268,529.5",
		rain7 = "M0.5,0.5 L188.5,529.5",
		rain8 = "M20.5,0.5 L208.5,529.5",
		rain9 = "M40.5,0.5 L228.5,529.5",
		rain10 = "M60.5,0.5 L248.5,529.5",
		abc = "";

	function pathMorph (path, data, dur) {
		path.animate({d: data}, dur, mina.ease);
	}

	var newcreation = new TimelineLite(),
			drawBottle = new TimelineLite(),
			virusRun = new TimelineLite(),
			darkRun = new TimelineLite(),
			fire = new TimelineLite(),
			rain = new TimelineLite(),
			drawStem = new TimelineLite(),
			lightRun = new TimelineLite(),
			end = new TimelineLite();


	// draw
	draw = function (pathId, color, time) {
		var orig = document.querySelector(pathId), length, timer;
		var obj = {length:0,
							 pathLength: orig.getTotalLength()};
		orig.style.stroke = color;
		function drawLine() {
			orig.style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
		}
		var t = TweenLite.to(obj, time, {length:obj.pathLength, onUpdate:drawLine, ease:Linear.easeNone});
	}

	drawBottle
		.call(draw, ['#bottle3', '#fff', 3])
		.call(draw, ['#bottle1', '#fff', 3])
		.call(draw, ['#bottle2', '#fff', 3])
		;

	run = function (name, time, thisEase) {
		var thisPath = name + '-path',
				thisId = '#' + name,
				data = Snap.path.toCubic(document.getElementById(thisPath).getAttribute('d'))
		    dataLength = data.length,
		    points = [], 
		    pointsString = data.toString();
		for (var i = 0; i < dataLength; i++) {
		  var seg = data[i];
		  if (seg[0] === "M") { 
		    var point = {};
		    point.x = seg[1];
		    point.y = seg[2];
		    points.push(point);
		  } else { 
		    for (var j = 1; j < 6; j+=2) {
		      var point = {};
		      point.x = seg[j];
		      point.y = seg[j+1];
		      points.push(point);
		    }
		  }
		}
		TweenLite.set(thisId, {x:points[0].x, y:points[0].y});
		var tween = TweenLite.to(thisId, time, {bezier:{type:"cubic", values:points, autoRotate:true}, ease:thisEase, force3D:true});
	}

	virusRun
		.from('#virus1', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, 'virus')
		.call(run, ['virus1', 3, 'Bounce.easeOut'], this, 'virus')
		.from('#virus2', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus2', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus3', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus3', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus4', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus4', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus5', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus5', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus6', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus6', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus7', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus7', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus8', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus8', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus9', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus9', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus10', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus10', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus11', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus11', 3, 'Bounce.easeOut'], this, '-=3')
		.from('#virus12', 3, {opacity:0, scale:0, ease:Bounce.easeOut}, '-=2.8')
		.call(run, ['virus12', 3, 'Bounce.easeOut'], this, '-=3')
		;

	darkRun
		.from('#dark1', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark')
		.to('#dark1', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark1', 2, 'SlowMo.easeOut'], this, 'dark')
		.from('#dark2', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark2', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark2', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark3', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark3', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark3', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark4', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark4', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark4', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark5', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark5', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark5', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark6', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark6', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark6', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark7', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark7', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark7', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark8', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark8', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark8', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark9', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark9', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark9', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark10', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark10', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark10', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark11', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark11', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark11', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark12', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark12', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark12', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark13', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark13', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark13', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark14', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark14', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark14', 2, 'SlowMo.easeOut'], this, '-=3.2')
		.from('#dark15', .5, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.to('#dark15', .5, {opacity:0, scale:0, ease:SlowMo.easeOut, delay:1})
		.call(run, ['dark15', 2, 'SlowMo.easeOut'], this, '-=3.2')
		;

	fireRun = function (name) {
		var thisPath = name + '-path',
				thisId = '#' + name,
				data = Snap.path.toCubic(document.getElementById(thisPath).getAttribute('d'))
		    dataLength = data.length,
		    points = [], 
		    pointsString = data.toString();
		for (var i = 0; i < dataLength; i++) {
		  var seg = data[i];
		  if (seg[0] === "M") { 
		    var point = {};
		    point.x = seg[1];
		    point.y = seg[2];
		    points.push(point);
		  } else { 
		    for (var j = 1; j < 6; j+=2) {
		      var point = {};
		      point.x = seg[j];
		      point.y = seg[j+1];
		      points.push(point);
		    }
		  }
		}
		TweenLite.set(thisId, {x:points[0].x, y:points[0].y});
		var tween = TweenLite.to(thisId, 1, {bezier:{type:"cubic", values:points, autoRotate:false}, force3D:true});
	}
	fire
		.from('#fire', 1.5, {opacity:0, scale:0}, 'fire')
		.call(fireRun, ['fire'], this, 'fire')
		.staggerTo(['#virus1', '#virus2', '#virus3', '#virus4', '#virus5', '#virus6', '#virus7', '#virus8', '#virus9', '#virus10', '#virus11', '#virus12'], .5, {fill:'#ff8900'}, 0.1)
		.to('#fire', .5, {opacity:0, scale:0}, '-=0.5')
		.staggerTo(['#virus1', '#virus2', '#virus3', '#virus4', '#virus5', '#virus6', '#virus7', '#virus8', '#virus9', '#virus10', '#virus11', '#virus12'], .5, {fill:'#000', scale:0.3}, 'virusDown')
		;

	rain
		.staggerFrom(['#rain1', '#rain2', '#rain3', '#rain4', '#rain5', '#rain6', '#rain7', '#rain8', '#rain9', '#rain10', ], 1, {opacity:0}, 'rain')
		.call(pathMorph, [snapRain1, rain1, 2000], this, 'rain')
		.call(pathMorph, [snapRain2, rain2, 2000], this, 'rain')
		.call(pathMorph, [snapRain3, rain3, 2000], this, 'rain')
		.call(pathMorph, [snapRain4, rain4, 2000], this, 'rain')
		.call(pathMorph, [snapRain5, rain5, 2000], this, 'rain')
		.call(pathMorph, [snapRain6, rain6, 2000], this, 'rain')
		.call(pathMorph, [snapRain7, rain7, 2000], this, 'rain')
		.call(pathMorph, [snapRain8, rain8, 2000], this, 'rain')
		.call(pathMorph, [snapRain9, rain9, 2000], this, 'rain')
		.call(pathMorph, [snapRain10, rain10, 2000], this, 'rain')
		.staggerTo(['#virus1', '#virus2', '#virus3', '#virus4', '#virus5', '#virus6', '#virus7', '#virus8', '#virus9', '#virus10', '#virus11', '#virus12'], .5, {scale:0, delay:3}, 'virusDown')
		.staggerTo(['#rain1', '#rain2', '#rain3', '#rain4', '#rain5', '#rain6', '#rain7', '#rain8', '#rain9', '#rain10', ], 1, {opacity:0})
		.from('#water', 1, {opacity:0})
		;

	drawStem
		.from('#stem1', 0.5, {opacity:0}, 'stem1')
		.call(draw, ['#stem1', '#8fb062', 1], this, 'stem1')
		.from('#stem2', 0.5, {opacity:0, delay:0.5}, 'stem2')
		.call(draw, ['#stem2', '#8fb062', 1], this, 'stem2')
		.staggerFrom('#leaf path', 0.5, {opacity:0}, 0.2)
		.staggerFrom(['#flower1', '#flower2'], 1.2, {opacity:0}, 0.2)
		;

	lightRun
		.from('#light1', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'light')
		.call(run, ['light1', 2, 'SlowMo.easeOut'], this, 'light')
		.from('#light2', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light2', 2, 'SlowMo.easeOut'], this, '-=2')
		.from('#light3', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light3', 2, 'SlowMo.easeOut'], this, '-=2')
		.from('#light4', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light4', 2, 'SlowMo.easeOut'], this, '-=2')
		.from('#light5', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light5', 2, 'SlowMo.easeOut'], this, '-=2')
		.from('#light6', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light6', 2, 'SlowMo.easeOut'], this, '-=2')
		.from('#light7', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light7', 2, 'SlowMo.easeOut'], this, '-=2')
		.from('#light8', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light8', 2, 'SlowMo.easeOut'], this, '-=2')
		.from('#light9', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, '-=1.8')
		.call(run, ['light9', 2, 'SlowMo.easeOut'], this, '-=2')
		.staggerTo(['#light1', '#light2', '#light3', '#light4', '#light5', '#light6', '#light7', '#light8', '#light9'], 1, {opacity:0, scale:0})
		.from('#butterfly', 2, {opacity:0, scale:0, ease:SlowMo.easeOut})
		.call(run, ['butterfly', 2, 'SlowMo.easeOut'], this, '-=2')
		;

	var txtContainer, txt;
	function splitText(obj, phrase) {
			var prevLetter, sentence,
				sentence = phrase.split("");
		$.each(sentence, function(index, val) {
			if(val === " "){
			  val = "&nbsp;";
			}
			var valN = val + "&nbsp;";
			var letter = $("<div/>", {
							id : "txt" + index
				 }).addClass('txt').html(valN).appendTo($(obj));

			// if(prevLetter) {
						// $(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
					// };
					// prevLetter = letter;
			});
		txt = $(".txt");
	}
	function init(txtC, phrase) {
		splitText(txtC, phrase);
		TweenLite.set($(txtC), {css:{perspective:500}});

		var tl2 = new TimelineLite();
		tl2.staggerFrom(txt, .1, {alpha:0}, 0.1, "textEffect");
		tl2.staggerFrom(txt, .4, {rotationX:"-120deg", top:25, transformOrigin: "70% 70% -25", ease:Elastic.easeOut}, 0.1, "textEffect");
	} 	 
	
  end
    .call(init, ['#quote', 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! - 2 Corinthians 5:17'])
    .to('#toggle', .5, {opacity:1, delay: 2})
    ;

	newcreation
		.add(drawBottle)
		.add(virusRun, '+=4')
		.add(darkRun)
		.add(fire)
		.add(rain)
		.add(drawStem)
		.add(lightRun)
		.add(end)
		;

});
