/*
 * jQuery Car(ousel) Plugin v0.0.1, dual licensed under MIT & GPL
 * by Really Good: http://reallygoodteam.com
 *
 * Thanks to jQuery Plugin Boilerplate v1.3 - http://stefangabos.ro/jquery/jquery-plugin-boilerplate/
 * Loosely based on http://www.queness.com/post/923/create-a-simple-infinite-carousel-with-jquery
 */

(function($) {
	$.fn.car = function(method) {
		var s, band, items, itemWidth, current, total, controls;
		var methods = {
				init: function(options) {
					this.car.settings = $.extend({}, this.car.defaults, options);
					s = this.car.settings;
					return this.each(function() {
						var $element = $(this),
							element = this,
							carId = this.id;
						controls = $('.car-controls[data-for="' + carId + '"]');
						band = $element.find('ul');
						items = band.find('li');
						itemWidth = items.outerWidth();
						current = 1;
						total = items.length;
						band.css('width', itemWidth * total);
						controls.delegate('a', 'click', helpers.moveSlide);
					});
				},
				destroy: function() {
					controls.undelegate('a', 'click', helpers.moveSlide);
				}
		};
		var helpers = {
			moveSlide: function(ev) {
				ev.preventDefault();
				var newItemLeft,
					looping = false,
					duration = s.duration,
					easing = s.easing;

				if($(this).hasClass('prev')) {
					if(current === 1) { // go back to last
						current = total;
						looping = true;
					} else {
						current--;
					}
				} else { // next
					if(current === total) { // go back to first
						current = 1;
						looping = true;
					} else {
						current++;
					}
				}
				if(looping) {
					duration *= total / 2;
					easing = "easeInBack";
				}
				newItemLeft = itemWidth - (current * itemWidth);

				band.animate({
					'left': newItemLeft
				}, duration, easing);
			}
		};

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error( 'Method "' +  method + '" does not exist in car plugin!');
		}

	};

	$.fn.car.defaults = {
		duration: 400,
		easing: 'swing'
	};

	$.fn.car.settings = {};

})(jQuery);