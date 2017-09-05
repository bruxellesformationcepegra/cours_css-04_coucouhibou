console.log('hello world !');

$( document ).ready(function(){
  var max = 0;
	$(".drink .product-drink p").each(function( index ){
		if ($(this).height() > max) {
			max = $(this).height();
		}
	})
	$(".drink .product-drink p").height(max);
});
