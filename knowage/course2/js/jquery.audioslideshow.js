/*
* Copyright 2014 ENGINEERING GROUP
*
* Licensed under the EUPL, Version 1.1 or - as soon they
will be approved by the European Commission - subsequent
versions of the EUPL (the "License");
* You may not use this work except in compliance with the
License.
* You may obtain a copy of the License at:
*
* http://ec.europa.eu/idabc/eupl
*
* Unless required by applicable law or agreed to in
writing, software distributed under the License is
distributed on an "AS IS" basis,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
* See the License for the specific language governing
permissions and limitations under the License.
*/

(function( $ ) {
	var currentslidemenucolor='#d5e2ed';
	var slidemenucolor='#f2f2f2';
	 
	$.fn.audioSlideshow = function( options ) {
			
		var settings = {
			jPlayerPath: "jplayer/",
			suppliedFileType: "mp3,oga", //Bugs - see at link http://stackoverflow.com/questions/7401282/jplayer-use-setmedia-to-set-the-media-url
			playSelector: ".audio-play",
			pauseSelector: ".audio-pause",
			stopSelector: ".audio-stop",
			currentTimeSelector: ".play-time",
			durationSelector: ".total-time",
			playheadSelector: ".playhead",
			timelineSelector: ".timeline",
			thumbnailWidth: "100",
			autoplay: true,
			titles: []
		
		};
		
		if(options){
		  jQuery.extend(settings,options);
		}
		
		// Begin to iterate over the jQuery collection that the method was called on
		return this.each(function () {
		  
			// Cache `this`
			var $that = $(this),
				$slides = $that.find('.audio-slides').children(),
				$menus = $that.find('.menu-slides').children(),
				
				$currentTime = $that.find(settings.currentTimeSelector),
				$duration = $that.find(settings.durationSelector),
				$playhead = $that.find(settings.playheadSelector),
				$timeline = $that.find(settings.timelineSelector),
				$playButton = $that.find(settings.playSelector),
				$pauseButton = $that.find(settings.pauseSelector),
				$stopButton = $that.find(settings.stopSelector),

				slidesCount = $slides.length,
				slideTimes = new Array(),
				audioDurationinSeconds = parseInt($that.attr('data-audio-duration')),
				isPlaying = false,
				currentSlide = -1;

			$pauseButton.hide();
			
			// Setup slides			
			$slides.each(function(index,el){
				var $el = $(el);
				$el.hide();

				var second = parseInt($el.attr('data-slide-time')),
					thumbnail = $el.attr('data-thumbnail');

				settings.titles.push($el.attr('data-title'));
				
				if(index > 0){
					slideTimes.push(second);
						
					var img = '<span><img width="'+ settings.thumbnailWidth +'" src="' + thumbnail + '"></span>',
						$marker = $('<a href="javascript:;" class="marker" data-time="' + second + '">' + img + '</a>'),
						l = (second / audioDurationinSeconds) * $that.width();
		  
					$marker.css('left',l).click(function(e){
						$jPlayerObj.jPlayer("play", parseInt($(this).attr('data-time')) + .5);
					});

					$timeline.append($marker);
				}
			});


			var $jPlayerObj = $('<div></div>');
			$that.append($jPlayerObj);
		
			$jPlayerObj.jPlayer({
				ready: function (event) {
					$.jPlayer.timeFormat.padMin = false;
					$(this).jPlayer("setMedia", {
						mp3: $that.attr('data-audio') + '.mp3',
						oga: $that.attr('data-audio') + '.ogg'
					});
					//autoplay
					if (settings.autoplay)
					    $(this).jPlayer("play");
				},
				swfPath: settings.jPlayerPath,
				supplied: settings.suppliedFileType,
				preload: 'auto',
				cssSelectorAncestor: "",
				errorAlerts: true,
			        warningAlerts: false
     
			});
						
			$jPlayerObj.bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
				var curTime = event.jPlayer.status.currentTime;
				audioDurationinSeconds = event.jPlayer.status.duration;
				var p = (curTime / audioDurationinSeconds) * 100 + "%";

				$currentTime.text($.jPlayer.convertTime(curTime));
				$duration.text($.jPlayer.convertTime(audioDurationinSeconds));

				$playhead.width(p);

				if(slidesCount){
					var nxtSlide = 0;
					for(var i = 0; i < slidesCount; i++){
						if(slideTimes[i] < curTime){
							nxtSlide = i + 1;							
						}
					}					
					
					setAudioSlide(nxtSlide);
					$('#audio-title').html (settings.titles[nxtSlide]);	

					$("#slide-number").html( (nxtSlide + 1) + ' / ' + slidesCount); 
				}
			});
				
			$jPlayerObj.bind($.jPlayer.event.play, function(event) { // Add a listener to report the time play began
				isPlaying = true;
				$playButton.hide();
				$pauseButton.show();
			});
			
			$jPlayerObj.bind($.jPlayer.event.pause, function(event) { // Add a listener to report the time pause began
				isPlaying = false;
				$pauseButton.hide();
				$playButton.show();
			});
			
			$jPlayerObj.bind($.jPlayer.event.ended, function(event) { // Add a listener to report the time ended began
			    	isPlaying = false;
				$pauseButton.hide();
				$playButton.show();
			});
			
			$slides.click(function(event){
				$jPlayerObj.jPlayer("play");
			});
			
			$menus.click(function(event){
			    var second = parseInt($(this).attr('data-slide-time')) + 1;
			    $jPlayerObj.jPlayer("play", parseInt(second));
			});
			
			$playButton.click(function(event){
				$jPlayerObj.jPlayer("play");
			});
				
			$pauseButton.click(function(event){
				$jPlayerObj.jPlayer("pause");
			});
			
			$stopButton.click(function(event){
				$jPlayerObj.jPlayer("stop");
			});
			
			$timeline.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;

				$jPlayerObj.jPlayer("play", t);
			});
			
			setAudioSlide(0);
			
			function setAudioSlide(n){			    
				if(n != currentSlide){   
				    
				    if($slides.get(currentSlide)){
					$($slides.get(currentSlide)).fadeOut();
				    }
				    
				    $($slides.get(n)).fadeIn();				    
				    currentSlide = n;
				    setBackgroungColor(n);
				}
			}
			
			function setBackgroungColor(n) {
			    
			    for(var i = 0; i < slidesCount; i++){
				if (i == n){
				    $("#menu_" + i).css('background-color', currentslidemenucolor);
				    var sHeight = parseInt($('#menu_'+ i).position().top) + $('#menu-slides').scrollTop() - parseInt($("#menu-slides").outerHeight())/2;
				    $('#menu-slides').prop("scrollTop",sHeight);
				}else{
				    $("#menu_" + i).css('background-color', slidemenucolor);
				}    
			    }
			}
				
		});
	};
}(jQuery));