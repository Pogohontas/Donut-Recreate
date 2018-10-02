let header = document.getElementById("header-test-id");
let logo = document.getElementById("header-donut-logo");

$(window).on("scroll", function(){
			if($(window).scrollTop()){
				$(header).removeClass("header-purple");
				$(header).addClass("header-white");
				$(logo).attr("src", "img/donut-logo-dark.png");
			} else {
				$(header).removeClass("header-white");
				$(header).addClass("header-purple");
				$(logo).attr("src", "img/donut-logo-light.png");
			}
		})