
$(document).ready(function(){
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 20) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}

		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$(".scroll-up-btn").addClass("show");
		} else {
			$(".scroll-up-btn").removeClass("show");
		}
	});

	// slide-up script
	$(".scroll-up-btn").click(function () {
		$("html").animate({ scrollTop: 0 });
		// removing smooth scroll on slide-up button click
		$("html").css("scrollBehavior", "auto");
	});

	$(".navbar .menu li a").click(function () {
		// applying again smooth scroll on menu items click
		$("html").css("scrollBehavior", "smooth");
	});

	// toggle menu/navbar script
	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});

});

// accordion
let accordion = document.querySelectorAll(".label");

accordion.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("active");

		let panel = item.nextElementSibling;
		if (item.classList.contains("active")) {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} else {
			panel.style.maxHeight = 0;
		}
	});
});

// form
 window.addEventListener("DOMContentLoaded", function () {
		// get the form elements defined in your form HTML above

		var form = document.getElementById("my-form");
		var button = document.getElementById("button");
		var status = document.getElementById("status");

		// Success and Error functions for after the form is submitted

		function success() {
			form.reset();
			status.innerHTML = "Thanks!";
			status.style.display = "block";
		}

		function error() {
			status.innerHTML = "Oops! There was a problem.";
			status.style.display = "block";
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

//  vanilla tilt
 VanillaTilt.init(document.querySelectorAll(".tilt"), {
		max: 25,
 });
 
// footer
const year = new Date();
document.querySelector("#year").innerHTML = "&copy " + year.getFullYear() + " All rights reserved.";

// animation
	 gsap.registerPlugin(ScrollTrigger);

	gsap.to("#home p", {
		y: -80,
		duration: 1,
		scrollTrigger: {
			trigger: ".link",
			scrub: 1,
			start: "top 53%",
			end: "bottom 30%",
		},
	});

	gsap.from("#about .heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 1,
		scrollTrigger: {
			trigger: ".heading",
			scrub: 1,
			// markers: true,
			start: "top 70%",
			end: "top 40%",
		},
	});
	gsap.from("#services .heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 1,
		scrollTrigger: {
			trigger: "#services",
			scrub: 1,
			// markers: true,
			start: "top 70%",
			end: "top 40%",
		},
	});
	gsap.from("#projects .heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: "#projects",
			scrub: 1,
			// markers: true,
			start: "top 70%",
			end: "top 40%",
		},
	});
	gsap.from("#contact .heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 1,
		scrollTrigger: {
			trigger: "#contact",
			scrub: 1,
			// markers: true,
			start: "top 70%",
			end: "top 40%",
		},
	});

	gsap.from(".right", {
		x: "80px",
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".right",
			// scrub: 1,
			start: "top 100%",
			end: "top 70%",
		},
	});
	gsap.from(".about-content", {
		x: "-80px",
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".about-content",
			// scrub: 1,
			start: "top 100%",
			end: "top 70%",
		},
	});
	
	gsap.from(".gallery-item", {
		y: 50,
		opacity: 0,
		stagger: 0.5,
		duration: 1,
		scrollTrigger: {
			trigger: ".gallery-item-inner",
			start: "top 70%",
			end: "top 40%",
		},
	});

	gsap.from(".box", {
		y: 50,
		opacity: 0,
		stagger: 0.5,
		duration: 1,
		scrollTrigger: {
			trigger: ".box-container",
			start: "top 70%",
			end: "top 40%",
		},
	});

// particle js
particlesJS(
	"particles-js",

	{
		particles: {
			number: {
				value: 80,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#000000",
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#27ae60",
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: "img/github.sv",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 5,
				random: true,
				anim: {
					enable: false,
					speed: 20,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: "#000000",
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 6,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "repulse",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 200,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
		config_demo: {
			hide_card: false,
			background_color: "#b61924",
			background_image: "",
			background_position: "50% 50%",
			background_repeat: "no-repeat",
			background_size: "cover",
		},
	}
);