
$(function(){
	'use strict';

	$('.gallery .thmubnails img').on('click',function(){
		$('.gallery .master-img img').attr('src',$(this).attr('src'));
	});
});