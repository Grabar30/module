$(".sqr_1_external").mouseenter( function() {
	$(".triangle2").css("visibility" , "visible");

}
);
$(".triangle-up").mouseenter( function() {
	$(".triangle1").css("visibility" , "visible");

}
);

$(".sqr_1_external").mouseleave( function(){
	$(".triangle1").animate({top: '+=400px'}, 2000);
	$(".triangle1").animate({right:'+=1100px'}, 2000);
});

$(".sqr_1_external").mouseleave( function(){
	$(".triangle2").animate({right:'+=1100px'}, 2000);
	$(".triangle2").animate({top: '+=395px'}, 2000);
});
