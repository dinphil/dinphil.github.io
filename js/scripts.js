
 $(document).ready(function()
    {        $.localScroll({
           target:'body',
        offset: -50,
        
        });

// $(window).resize(function() {
//     $('#hack').videoBG({
//	mp4:'js/tunnel_animation.mp4',
//	ogv:'js/tunnel_animation.ogv',
//	webm:'js/tunnel_animation.webm',
//	scale:true,
//     height: 1000
//     
//}).resize();
// });
    });



/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 

$(function(){
		$('#nav').slicknav({
	label: 'MENU',
	duration: 250,
	});
});


/*RAPHAEL JS PERCENTAGE DIAGRAM*/
$(function(){
    var test = false;
    
  $(window).resize(function() {
      var w = $("#specdiagram").width();
      if(515 - w > 0) {
      j = 515 - w;
      }
      else { j = 0; }
var d = (w/2);
var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		    r = Raphael('diagram', w, w+j),
			rad = 73,
			defaultText = 'Hover on the bars to learn more',
			speed = 250;
		
		r.circle(d, d+j, 73).attr({ stroke: '#000', fill: 'transparent' });
		
        title = r.text(d, 45, defaultText).attr({
			font: '20px Roboto',
			fill: '#000',
            width: '200px',
            'line-height': '22px',
            'font-weight': '300'
		}).toFront();
        title2 = r.text(d,d+j, " ").attr({
			font: '40px Roboto',
			fill: '#000',
            width: '200px'
		}).toFront();
        
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = d + rad * Math.cos(b),
				sy = d - rad * Math.sin(b),
				x = d + rad * Math.cos(a),
				y = d - rad * Math.sin(a),
				path = [['M', sx, sy+j], ['A', rad, rad, 0, +(alpha > 180), 1, x, y+j]];
			return { path: path, stroke: color }
		}
		
		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
                text = t.find('.text').text(),
				words = t.find('.text').text().split(" "),                   
                tempText = "";
            for (var i = 0; i < words.length; i++) {
                title.attr("text", tempText + " " + words[i]);                
                if(title.getBBox().width > w-100) {
                    tempText+= "\n" + words[i];
                } else {
                    tempText+= " " + words[i];
                }
            }
            title.attr("text", defaultText);
            tempText = tempText.substring(1);
            text = tempText;
			var c = w*.04;
			rad += c;	
			var z = r.path().attr({ arc: [value, color , rad], 'stroke-width': (c-5), stroke:"#000" });

			z.mouseover(function(){
                this.animate({ 'stroke-width': (c+5), opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text }).animate({ opacity: 1 }, speed, '<');
				});
                title2.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: value + "%"}).animate({ color: '#FFF', opacity: 1}, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': (c-5), opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});
                title2.stop().animate({ opacity: 0 }, speed, '>', function(){
					title2.attr({ text: " " }).animate({ opacity: 1 }, speed, '<');
				});
            });
		});
		
	}
}
if(test == false) {
$(function(){ o.init(); });
     test = true;
}
else {
   r.remove();
   $(function(){ o.init()}); 
   test = true;            
}
  }).resize();
  
})
/*DONE*/


var data1 = {
  labels: ["Web", "Hardware", "Windows App", "Android", "iOS", "Desktop" ],
  datasets: [{
    fillColor: "transparent",
    strokeColor: "#FFF",
    pointColor: "#123",
    pointStrokeColor: "#FFF",
    data: [16, 8, 12, 16,15,13]
  }]
}

var options1 = {
  scaleFontColor: "#FFF",
  scaleLineColor: "#FFF",
  scaleGridLineColor: "transparent",
  bezierCurve: false,
  scaleOverride: true,
  scaleSteps: 2,
  scaleStepWidth: 10,
  scaleStartValue: 0
}

    var t1 = new TimelineMax();
    t1.from("#t2", .5, {width: 0})
        .staggerFrom(".count", .5, {opacity: 0, top: "10px", color: "#F79E21"},.2);

var t2 = new TimelineMax();
t2.staggerFrom(".faq1", 1, {scale:0.5, opacity:0, ease:Quart.easeOut, force3D:true}, .2)
	// init controller

var t4 = new TimelineMax();
t4.to("nav",1, {backgroundColor: "#FFF", boxShadow:"3px 3px 5px #666", opacity: .95});
var controller2 = new ScrollMagic.Controller();

	// build scenes
	
 
	var controller = new ScrollMagic.Controller();
    var sceneinit = new ScrollMagic.Scene({triggerElement: "#caption", duration: 0})
        .setTween(t4)
        .addTo(controller);
	var bg = new ScrollMagic.Scene({
          triggerElement: "#home", // point of execution
          duration: $(window).height() + 200, // pin element for the window height - 1
          triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
          reverse: true // allows the effect to trigger when scrolled in the reverse direction
        })
        .setPin("#parallax1")
        
        .addTo(controller);
    var bg2 = new ScrollMagic.Scene({
          triggerElement: "#stats", // point of execution
          duration: 500, // pin element for the window height - 1
        })
        .setTween("#parallax2", {transform:"scale(1.1,1.1)"})
        .addTo(controller);
var bg3 = new ScrollMagic.Scene({
          triggerElement: "#faq", // point of execution
          duration: 500, // pin element for the window height - 1
        })
        .setTween("#parallax3", {transform:"scale(1.1,1.1)"})
        .addTo(controller);
  
    var infopic = new ScrollMagic.Scene({
          triggerElement: "#about", // point of execution
          duration: 500, // pin element for the window height - 1
        })
        .setTween("#infopic", {top:"-10px"})
        
        .addTo(controller);

	var scene = new ScrollMagic.Scene({triggerElement: "#stats", duration: 0})
                    .setTween(t1)
					.on("enter", function (e) {
                    })
        
                    
                    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#info", duration: 0})
                    .setTween(new TimelineLite().add([
                        TweenMax.from("#specdiagram", 1 , {scale:0.75, opacity:0, ease:Bounce.easeOut, force3D:true})
                    ]))
        
                    .addTo(controller);


var scene3 = new ScrollMagic.Scene({triggerElement: "#faqtrig", duration: 0})
                    .setTween(t2)
        
                    .addTo(controller);



