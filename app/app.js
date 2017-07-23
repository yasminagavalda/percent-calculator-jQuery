$('#helpBlock1').addClass('hidden');

$('#f1-calculate').click(function(){
	$('#helpBlock1').addClass('hidden');
	var a = parseInt($('#f1-a').val());
	var b = parseInt($('#f1-b').val());
	$('#f1-result').val(a / 100 * b);
	if (isNaN($('#f1-result').val())) {
		$('#f1-result').val('');
		$('#helpBlock1').removeClass('hidden');
	};

});

$('#f2-calculate').click(function(){
	$('#helpBlock1').addClass('hidden');
	var a = parseInt($('#f2-a').val());
	var b = parseInt($('#f2-b').val());
	$('#f2-result').val(a / b * 100);
	if (isNaN($('#f2-result').val())) {
		$('#f2-result').val('');
		$('#helpBlock1').removeClass('hidden');
	};
});

$('#f3-calculate').click(function(){
	$('#helpBlock1').addClass('hidden');
	var a = parseInt($('#f3-a').val());
	var b = parseInt($('#f3-b').val());
	$('#f3-result').val((b - a) / a  * 100);
	if (isNaN($('#f3-result').val())) {
		$('#f3-result').val('');
		$('#helpBlock1').removeClass('hidden');
	};
});