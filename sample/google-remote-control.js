/*global window*/
if (!window.io) {
	throw 'Socket.io library is required. Make sure that node server is up';
}

(function (io) {

	'use strict';

	var GoogleRemoteControl = function () {},

		priv = {
			socket : null,
			connected : false
		};

	GoogleRemoteControl.prototype.connect = function (socketserver, key) {
		if (priv.connected === false) {
			priv.socket = io.connect(socketserver);
			priv.connected = true;

			if( !key ) {
				throw 'Key required. Function scope: control.connect("http://localhost:81", YOUR_KEY_HERE)';
			}

			/* Register all Slide Functions. Eg: Next, Prev, Reset; */
			this.init(key);
		}
	};

	/* Functions for Google HTML5 Presentation Script  */
	/* See more at http://html5slides.googlecode.com/svn/trunk/slides.js */
	/* Put all your slide actions here */
	GoogleRemoteControl.prototype.init = function(key) {

		// Requesting sync with the key
		priv.socket.emit('requestSync', key);

		// On next, change to the next slide
		priv.socket.on('next', function (data) {
			nextSlide();
			event.preventDefault();          
		});

		// On next, back to the previous slide
		priv.socket.on('prev', function (data) {
			prevSlide();
			event.preventDefault();          
		});

		// Back to the first slide
		priv.socket.on('reset', function (data) {
			curSlide = 0;
			updateSlides();
		});

		// Go to a specific slide
		priv.socket.on('gotoslide', function (data) {
			curSlide = data.slide - 1;
			updateSlides();
		});
	}

	window.GoogleRemoteControl = GoogleRemoteControl;
}(window.io));