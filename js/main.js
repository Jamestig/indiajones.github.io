function onYouTubeIframeAPIReady() {
	var player;

	player = new YT.Player("YouTubeBackgroundVideoPlayer", {
		videoId: "LVanPoKh7Ew", // YouTube Video ID
		width: 1280, // Player width (in px)
		height: 720, // Player height (in px)

		playerVars: {
			autoplay: 1, // Auto-play the video on load

			autohide: 1,

			start: 20,

			disablekb: 1,

			controls: 0, // Hide pause/play buttons in player

			showinfo: 0, // Hide the video title

			modestbranding: 1, // Hide the Youtube Logo

			loop: 1, // Run the video in a loop

			fs: 0, // Hide the full screen button

			autohide: 0, // Hide video controls when playing

			rel: 0,

			enablejsapi: 1,
		},

		events: {
			onReady: function (e) {
				e.target.mute();

				e.target.setPlaybackQuality("720p");
			},

			onStateChange: function (e) {
				if (e && e.data === 1) {
					var videoHolder = document.getElementById("home-banner-box");

					if (videoHolder && videoHolder.id) {
						videoHolder.classList.remove("loading");
					}
				} else if (e && e.data === 0) {
					e.target.playVideo();
				}
			},
		},
	});
}

// TIMINGS

setTimeout(function () {
	$(".open-button").fadeIn();
}, 15000);

setTimeout(function () {
	$(".quote-2").css("opacity", "1");
}, 5000);

setTimeout(function () {
	$(".quote-container p").css("opacity", "0");
}, 10000);

// BUTTONS

// open button
$(".open-button").click(function () {
	$(".open-button").hide();
	$(".quote-container").hide();
	$("h1").css({"color": "red", "opacity": "1", "font-size": "91px", "margin-left": "-25vw", "margin-right": "-25vw"});
	$("body.index").css("background-image", "url('/img/forest.jpg')");
	$(".container").css("background", "rgba(0,0,0,0.2)");

	setTimeout(function () {
		$(".info-1").css('opacity', '1');
	}, 3000);
	setTimeout(function () {
		$(".info-2").css('opacity', '1');
	}, 5000);
	setTimeout(function () {
		$(".info-3").css('opacity', '1');
	}, 7000);
	setTimeout(function () {
		$(".container__bottom").css('opacity', '1');
	}, 10000);
});

window.addEventListener("DOMContentLoaded", function () {
	// get the form elements defined in your form HTML above

	var form = document.getElementById("my-form");
	var button = document.getElementById("my-form-button");
	var status = document.getElementById("my-form-status");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		button.style = "display: none ";
		status.innerHTML = "Thanks!";
	}

	function error() {
		status.innerHTML = "Oops! There was a problem.";
	}

	// handle the form submission event

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}
