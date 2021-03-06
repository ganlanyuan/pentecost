// codekit-prepend "lib/Modernizr.js"
// @codekit-prepend "../../bower_components/snap.svg/dist/snap.svg-min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/TweenLite.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/plugins/BezierPlugin.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/easing/EasePack.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/TimelineLite.min.js"
// @codekit-prepend "../../bower_components/gsap/src/minified/plugins/cssPlugin.min.js"
// @codekit-prepend "../../bower_components/rocket/src/js/kit.js"

ready(function(){

	// pathMorph
	function pathMorph (path, data, dur) {
		path.animate({d: data}, dur, mina.ease);
	}

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

	// run
	run = function (name, time, thisEase, autoRotate) {
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
		if (autoRotate === true) {
			var tween = TweenLite.to(thisId, time, {bezier:{type:"cubic", values:points, autoRotate:true}, ease:thisEase, force3D:true});
		} else{
			var tween = TweenLite.to(thisId, time, {bezier:{type:"cubic", values:points, autoRotate:false}, ease:thisEase, force3D:true});
		};
	}

	// splitText
	var txtContainer, txt;
	function splitText(obj, phrase) {
			var prevLetter, sentence,
				sentence = phrase.split("");
		$.each(sentence, function(index, val) {
			if(val === " "){
			  val = "&nbsp;";
			}
			var valN = val;
			// var valN = val + "&nbsp;";
			var letter = $("<div/>", {
							id : "txt" + index
				 }).addClass('txt').html(valN).appendTo($(obj));

			// if(prevLetter) {
						// $(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
					// };
					// prevLetter = letter;
			});
		txt = $(obj).find(".txt");
	}
	function textEffect(txtC, phrase) {
		splitText(txtC, phrase);
		TweenLite.set($(txtC), {css:{perspective:500}});
		var tl2 = new TimelineLite();
		tl2.staggerFrom(txt, 0.15, {alpha:0}, 0.1, "textEffect");
		tl2.staggerFrom(txt, .6, {skewX:120, left:50, transformOrigin: "50% 50%", ease:Elastic.easeOut}, 0.1, "textEffect");
	} 
	
	// var timeline
	var newcreation = new TimelineLite(),
			drawBottle1 = new TimelineLite(),
			drawBottle2 = new TimelineLite(),
			drawBottle3 = new TimelineLite(),
			virusRun = new TimelineLite(),
			darkRun1 = new TimelineLite(),
			darkRun2 = new TimelineLite(),
			darkRun3 = new TimelineLite(),
			darkRun4 = new TimelineLite(),
			darkRun5 = new TimelineLite(),
			darkRun6 = new TimelineLite(),
			darkRun7 = new TimelineLite(),
			darkRun8 = new TimelineLite(),
			darkRun9 = new TimelineLite(),
			darkRun10 = new TimelineLite(),
			darkRun11 = new TimelineLite(),
			darkRun12 = new TimelineLite(),
			darkRun13 = new TimelineLite(),
			darkRun14 = new TimelineLite(),
			darkRun15 = new TimelineLite(),
			fire = new TimelineLite(),
			rain = new TimelineLite(),
			drawStem = new TimelineLite(),
			lightRun = new TimelineLite(),
			end = new TimelineLite();

	// var snap
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

	// var path
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

	drawBottle1
		.from('#bottle1', 0.3, {opacity:0}, 'bottle1')
		.call(draw, ['#bottle1', '#fff', 2], this, 'bottle1');
	drawBottle2
		.from('#bottle2', 0.3, {opacity:0}, 'bottle2')
		.call(draw, ['#bottle2', '#fff', 1], this, 'bottle2');
	drawBottle3
		.from('#bottle3', 0.3, {opacity:0}, 'bottle3')
		.call(draw, ['#bottle3', '#fff', 1], this, 'bottle3');

	virusRun
		.from('#virus1', 3, {opacity:0, scale:0, ease:Power2.easeOut}, 'virus')
		.call(run, ['virus1', 3, 'Power2.easeOut', true], this, 'virus')
		.from('#virus2', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus2', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus3', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus3', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus4', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus4', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus5', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus5', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus6', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus6', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus7', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus7', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus8', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus8', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus9', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus9', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus10', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus10', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus11', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus11', 3, 'Power2.easeOut', true], this, '-=3')
		.from('#virus12', 3, {opacity:0, scale:0, ease:Power2.easeOut}, '-=2.8')
		.call(run, ['virus12', 3, 'Power2.easeOut', true], this, '-=3')
		;

	darkRun1
		.from('#dark1', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark1')
		.call(run, ['dark1', 2, 'SlowMo.easeOut', true], this, 'dark1')
		.to('#dark1', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun2
		.from('#dark2', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark2')
		.call(run, ['dark2', 2, 'SlowMo.easeOut', true], this, 'dark2')
		.to('#dark2', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun3
		.from('#dark3', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark3')
		.call(run, ['dark3', 2, 'SlowMo.easeOut', true], this, 'dark3')
		.to('#dark3', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun4
		.from('#dark4', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark4')
		.call(run, ['dark4', 2, 'SlowMo.easeOut', true], this, 'dark4')
		.to('#dark4', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun5
		.from('#dark5', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark5')
		.call(run, ['dark5', 2, 'SlowMo.easeOut', true], this, 'dark5')
		.to('#dark5', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun6
		.from('#dark6', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark6')
		.call(run, ['dark6', 2, 'SlowMo.easeOut', true], this, 'dark6')
		.to('#dark6', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun7
		.from('#dark7', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark7')
		.call(run, ['dark7', 2, 'SlowMo.easeOut', true], this, 'dark7')
		.to('#dark7', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun8
		.from('#dark8', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark8')
		.call(run, ['dark8', 2, 'SlowMo.easeOut', true], this, 'dark8')
		.to('#dark8', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun9
		.from('#dark9', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark9')
		.call(run, ['dark9', 2, 'SlowMo.easeOut', true], this, 'dark9')
		.to('#dark9', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun10
		.from('#dark10', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark10')
		.call(run, ['dark10', 2, 'SlowMo.easeOut', true], this, 'dark10')
		.to('#dark10', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun11
		.from('#dark11', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark11')
		.call(run, ['dark11', 2, 'SlowMo.easeOut', true], this, 'dark11')
		.to('#dark11', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun12
		.from('#dark12', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark12')
		.call(run, ['dark12', 2, 'SlowMo.easeOut', true], this, 'dark12')
		.to('#dark12', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun13
		.from('#dark13', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark13')
		.call(run, ['dark13', 2, 'SlowMo.easeOut', true], this, 'dark13')
		.to('#dark13', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun14
		.from('#dark14', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark14')
		.call(run, ['dark14', 2, 'SlowMo.easeOut', true], this, 'dark14')
		.to('#dark14', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;
	darkRun15
		.from('#dark15', 2, {opacity:0, scale:0, ease:SlowMo.easeOut}, 'dark15')
		.call(run, ['dark15', 2, 'SlowMo.easeOut', true], this, 'dark15')
		.to('#dark15', 0.3, {opacity:0, scale:2, ease:SlowMo.easeOut})
		;

	fire
		.from('#fire', 2, {opacity:0, scale:0}, 'fire')
		.call(run, ['fire', 2, 'Power2.easeOut', false], this, 'fire')
		.staggerTo(['#virus1', '#virus2', '#virus3', '#virus4', '#virus5', '#virus6', '#virus7', '#virus8', '#virus9', '#virus10', '#virus11', '#virus12'], .5, {fill:'#ff8900'}, 0.1)
		.to('#fire', .5, {opacity:0}, '-=0.5')
		.staggerTo(['#virus1', '#virus2', '#virus3', '#virus4', '#virus5', '#virus6', '#virus7', '#virus8', '#virus9', '#virus10', '#virus11', '#virus12'], .5, {fill:'#000', scale:0.3}, 0.1, 'virusDown')
		;

	rain
		.staggerFrom(['#rain1', '#rain2', '#rain3', '#rain4', '#rain5', '#rain6', '#rain7', '#rain8', '#rain9', '#rain10', ], 1, {opacity:0}, 0.1, 'rain')
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
		.staggerTo(['#virus1', '#virus2', '#virus3', '#virus4', '#virus5', '#virus6', '#virus7', '#virus8', '#virus9', '#virus10', '#virus11', '#virus12'], .5, {scale:0, opacity:0, delay:1}, 0, 'virusDown')
		.staggerTo(['#rain1', '#rain2', '#rain3', '#rain4', '#rain5', '#rain6', '#rain7', '#rain8', '#rain9', '#rain10', ], 1, {opacity:0}, 0.1, 'virusDown')
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
		.from('#light1', 2, {opacity:0, scale:0, ease:Power2.easeOut}, 'light')
		.call(run, ['light1', 2, 'Power2.easeOut', true], this, 'light')
		.from('#light2', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light2', 2, 'Power2.easeOut', true], this, '-=2')
		.from('#light3', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light3', 2, 'Power2.easeOut', true], this, '-=2')
		.from('#light4', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light4', 2, 'Power2.easeOut', true], this, '-=2')
		.from('#light5', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light5', 2, 'Power2.easeOut', true], this, '-=2')
		.from('#light6', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light6', 2, 'Power2.easeOut', true], this, '-=2')
		.from('#light7', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light7', 2, 'Power2.easeOut', true], this, '-=2')
		.from('#light8', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light8', 2, 'Power2.easeOut', true], this, '-=2')
		.from('#light9', 2, {opacity:0, scale:0, ease:Power2.easeOut}, '-=1.5')
		.call(run, ['light9', 2, 'Power2.easeOut', true], this, '-=2')
		.staggerTo(['#light1', '#light2', '#light3', '#light4', '#light5', '#light6', '#light7', '#light8', '#light9'], 1, {opacity:0, scale:0})
		.from('#butterfly', 2, {opacity:0, scale:0, ease:Power2.easeOut})
		.call(run, ['butterfly', 2, 'Power2.easeOut'], this, '-=2')
		;

  end
    .call(textEffect, ['#quote', 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! - 2 Corinthians 5:17'])
    ;

	newcreation
		.add(drawBottle1)
		.add(drawBottle2, '+=2')
		.add(drawBottle3, '+=1')
		.add(virusRun, '+=1')
		.add(darkRun1)
		.add(darkRun2, '-=1.6')
		.add(darkRun3, '-=1.6')
		.add(darkRun4, '-=1.6')
		.add(darkRun5, '-=1.6')
		.add(darkRun6, '-=1.6')
		.add(darkRun7, '-=1.6')
		.add(darkRun8, '-=1.6')
		.add(darkRun9, '-=1.6')
		.add(darkRun10, '-=1.6')
		.add(darkRun11, '-=1.6')
		.add(darkRun12, '-=1.6')
		.add(darkRun13, '-=1.6')
		.add(darkRun14, '-=1.6')
		.add(darkRun15, '-=1.6')
		.add(fire)
		.add(rain)
		.add(drawStem)
		.add(lightRun)
		.add(end, '+=1')
		;

});
