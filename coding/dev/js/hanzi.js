// codekit-prepend "../../bower_components/REM-unit-polyfill/js/rem.js"
// codekit-prepend "../../bower_components/svg4everybody/svg4everybody.ie8.min.js"
// @codekit-prepend "lib/Modernizr.js"
// @codekit-prepend "../../bower_components/snap.svg/dist/snap.svg-min.js"
// @codekit-prepend "../../bower_components/gsap/src/uncompressed/TweenMax.js"
// @codekit-prepend "../../bower_components/responsive-img.js/responsive-img.js"
// @codekit-prepend "../../bower_components/rocket/src/js/kit.js"

ready(function(){

  var snapF1 = Snap('#frame-1'),
      snapF2 = Snap('#frame-2'),
      snapF3 = Snap('#frame-3'),
      snapF4 = Snap('#frame-4'),
      snapL1 = Snap('#line-1'),
      snapL2 = Snap('#line-2'),
      snapL3 = Snap('#line-3'),
      snapL4 = Snap('#line-4');

  // var frame1 = k('#frame-1')[0],
  //     frame2 = k('#frame-2')[0],
  //     frame3 = k('#frame-3')[0],
  //     frame4 = k('#frame-4')[0];

  var tianFD1 = "M104.284063,27.219023 C77.5434972,32.709589 50.3784029,28.8935513 22.3217991,29.8039286 C17.6284029,29.959589 14.3689689,24.97374 16.4350066,20.7520418 C20.0387802,13.4077022 26.2133085,10.2709098 35.5529312,11.0256268 C77.8076482,14.4407211 119.590667,4.96902298 161.727459,6.45487204 C175.109535,6.92657015 186.953875,-0.262109095 200.623686,1.19543807 C212.600101,2.47373996 224.892554,8.54449468 223.444441,17.9407211 C221.892554,27.9831739 206.576516,33.464306 196.373686,28.959589 C183.901988,23.454872 171.916139,25.6388343 159.784063,25.3369475 C133.708592,24.6907211 107.666139,26.5256268 104.284063,27.219023 Z",
      tianFD2 = "M111.284063,186.56808 C94.9963274,214.119966 81.7699123,242.591664 56.6614217,262.648268 C51.1708557,267.039778 45.6425538,274.681287 39.1189689,268.902985 C32.109535,262.686004 39.8123651,256.945438 43.8642519,251.266193 C59.7085916,229.058646 75.6850066,207.06808 90.1755727,183.747325 C105.232176,159.525627 101.703875,133.893551 107.284063,106.303929 C108.33595,101.105815 102.897271,96.9501551 98.1897236,99.3888343 C65.9680255,116.086948 39.3972708,137.756759 8.77462929,150.450155 C2.59538401,153.011476 -2.86688014,145.209589 1.68028967,140.303929 C13.6850066,127.369966 30.1755727,120.275627 44.4633085,110.652985 C56.5057614,102.539778 69.3736859,95.8133626 82.604818,89.8227966 C109.774629,77.5209098 118.75182,50.6290098 107.057648,27.219023 C102.567079,18.2295736 148.672428,14.1206394 142.453877,23.9636145 C138.247909,30.6209934 121.74161,42.9926079 131.213309,67.3794003 C132.567082,70.8746834 134.562365,71.4831739 137.736893,72.4171362 C173.817082,83.0775135 200.736893,111.053929 235.501044,124.351098 C245.128403,128.035061 250.218026,135.195438 244.010478,145.101098 C237.43029,155.591664 230.449158,153.464306 221.005761,146.247325 C199.864252,130.086948 178.13312,114.3794 155.156705,101.044495 C133.302931,88.3652494 129.519912,93.6058154 125.850101,117.049212 C119.755761,155.983174 143.868969,178.855815 165.821799,203.327514 C180.83595,220.063363 197.812365,234.945438 211.213309,253.294495 C216.567082,260.624683 219.185007,268.369966 213.515195,274.058646 C208.916139,278.681287 202.864252,272.360532 197.510478,268.874683 C165.425573,247.987891 148.420856,213.544495 121.350101,185.478457 C118.435007,182.459589 113.416139,182.954872 111.284063,186.56808 Z",
      tianLD1 = "M344.5,25.5 L622.5,25.5",
      tianLD2 = "M361.482759,145.5 L622.5,145.5",
      tianLD3 = "M302.410156,114.513119 L364.585938,168.727963 L249.722656,224.403744",
      tianLD4 = "M112.345926,340.348036 L112.345926,350.902826 L393.654074,350.902826 L393.654074,340.348036";
  
  function pathMorph (path, data, dur) {
    path.animate({d: data}, dur, mina.easeOut);
  }

  var tl = new TimelineLite();
  tl
  .from('#frame-1', 0.5, {y:'+=200', z:'+=20', opacity:0, scale:0}, 'tian-frame-1')
  .call(pathMorph, [snapF1, tianFD1, 500], this, 'tian-frame-1')
  .to('#line-1', .5, {opacity:1}, 'tian-line-1')
  .call(pathMorph, [snapL1, tianLD1, 500], this, 'tian-line-1')
  .from('#tian-text-1', 1.2, {opacity:0, x:-20, rotationX:-120})
  .from('#frame-2', .6, {opacity: 0, scale:0, y:'+=120', rotation:-120, delay:.8}, 'tian-frame-2')
  .call(pathMorph, [snapF2, tianFD2, 1000], this, 'tian-frame-2')
  .to('#line-2', .5, {opacity:1}, 'tian-line-2')
  .call(pathMorph, [snapL2, tianLD2, 500], this, 'tian-line-2')
  .from('#tian-text-2', 1.2, {opacity:0, x:-20, rotationX:-120})
  .to('#line-4', .5, {opacity:1}, 'tian-line-4')
  .call(pathMorph, [snapL4, tianLD4, 500], this, 'tian-line-4')
  .from('#tian-title', 1.5, {opacity:0, x:-20, rotationX:-120})
  .from('#tian-p', 1.5, {opacity:0})
  ;


  // var txtContainer = $("#quote"),
	// 	  txt;
	//
  // function splitText(phrase) {
	// 	  var prevLetter, sentence,
  //       sentence = phrase.split("");
  //   $.each(sentence, function(index, val) {
  //     if(val === " "){
  //       val = "&nbsp;";
  //     }
  //     var letter = $("<div/>", {
	// 					  id : "txt" + index
	// 		   }).addClass('txt').html(val).appendTo(txtContainer);
	//
  //     if(prevLetter) {
	// 			    $(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
	// 		    };
	// 		    prevLetter = letter;
	// 	    });
  //   txt = $(".txt");
  // }
	//   
	// function buildTimeline() {
	// 	TweenLite.set(txtContainer, {css:{perspective:500}});
	// 	
	// 	var tl2 = new TimelineLite();
	// 	tl2.staggerFrom(txt, 0.4, {alpha:0}, 0.06, "textEffect");
	// 	tl2.staggerFrom(txt, 0.8, {rotationX:"120deg", top:20, transformOrigin: "50% 50% -20", ease:Back.easeOut}, 0.06, "textEffect");
	// } 
	//  
	// function init() {
  //   splitText("We Hope You Enjoyed the Tour");
  //   buildTimeline();
  // } 	 
	// init();
});
