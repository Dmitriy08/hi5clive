

$(document).ready(function () {
	$(".menu-icon").click(function(){
		$(this).closest(".main-menu").find(".menu").toggleClass("active");
		$(this).closest(".main-menu").toggleClass("active");
		$('body').toggleClass("open-menu");
	});
      $(".menu li a").click(function(){
            $(".menu-icon").click();
      });
});





