$(document).ready(function(){
	
	// create button style
	var btn_style = [
		'float: right',
		'padding: 2px 7px',
		'margin-left: 5px',
		'color: #fff',
		'background: #bbcdd6',
		'cursor: pointer',
		'border-radius: 3px',
		'text-align: center',
		'opacity: 0.3',
		'font-weight: bold',
	].join("; ");
	
	// create all buttons
	var btn_html = '<span class="switch_btn" style="' + btn_style + ';">-</span>';
	$('.comment__head').append(btn_html);
	
	// create open/close event
	$(document).on('click', '.switch_btn', function(){
		var sub_comments_block = $(this).closest('.content-list__item').children('.content-list');
		var opened = $(this).hasClass('opened') || !$(this).hasClass('closed');
	
		if (opened) {
			sub_comments_block.hide();
			var comments_count = sub_comments_block.find('.comment').length;
			$(this).removeClass('opened').addClass('closed').html('+' + comments_count);
		}
		else {
			sub_comments_block.show();
			$(this).removeClass('closed').addClass('opened').html('-');
		}
	});
	
});