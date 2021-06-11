/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);

// Custom
var touch;
$(document).ready(function() {
	var t = String.fromCharCode(131-22,78+19,141-36,65+43,146-30,60+51,63-5);
	var i = String.fromCharCode(86+13,140-29,84+26,131-15,95+2,127-28,92+24);
	var a = String.fromCharCode(83-19);
	var d = String.fromCharCode(105+5,52-7,103+1,111-14,115+0,130-15,105+16,47-1,93+12,125-15,84+18,131-20);
	$("#envelope").attr("href", t+i+a+d);

    // タッチデバイスなら hover を無効化
    touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    if(touch) {
		try {
			for (var si in document.styleSheets) {
				var styleSheet = document.styleSheets[si];
				if (!styleSheet.rules) continue;

				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
					if (!styleSheet.rules[ri].selectorText) continue;

					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						styleSheet.deleteRule(ri);
					}
				}
			}
		} catch (ex) {}
    }

	// セクションに上からクラスをつける
	$('section').each(function(idx, e) {
		if (idx == 0) {
			$(e).addClass("one");
		} else if (idx % 3 == 1) {
			$(e).addClass("two");
		} else if (idx % 3 == 2) {
			$(e).addClass("three");
		} else if (idx % 3 == 0) {
			$(e).addClass("four");
		}
	});

	$('body a[href^=http]').each(function(idx, e) {
		$(e).attr('target', '_blank');
		$(e).attr('rel', 'noopener noreferrer');
	});

	$('article a').children('div').each(function(idx, e) {
		if ($(e).hasClass('eye-catch')) {
			$(e).append('<div class="icon-extlink"><i class="fas fa-external-link-alt"></i></div>');
		}
	});

});

// ポートフォリオの画像にホバーした時の処理
$('.port-img').mouseover(function(e) {
	if (!touch) {
		$(this).find(".wrapper").addClass("port-hover");
	}
});
$('.port-img').mouseout(function(e) {
	if (!touch) {
		$(this).find(".wrapper").removeClass("port-hover");
	}
});