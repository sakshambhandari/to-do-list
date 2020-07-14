//striking off
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which===13)
	{
		var newtodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + newtodo + "</li>");
	}
	
});