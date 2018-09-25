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
	var close_first_level_btn = '<span class="close_all" style="' + btn_style + '; margin-top: 4px;">свернуть все</span>';
	var open_first_level_btn = '<span class="open_all" style="' + btn_style + '; margin-top: 4px;">развернуть все</span>';
	
	$('.comment__head').append(btn_html);
	$('.comments-section__subscribe-panel').append(close_first_level_btn);
	$('.comments-section__subscribe-panel').append(open_first_level_btn);
	
	// create open/close event for single comments
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

	// create close event for the first level of all comments
	$(document).on('click', '.close_all', function(){
		var first_level_comments = $("#comments-list > .content-list__item_comment");

		$.each(first_level_comments, function(index, value) {
			var button = $(this).find(".switch_btn").filter(':first');
			var opened = button.hasClass('opened') || !button.hasClass('closed');
			if (opened) {
				button.click();	
			}
		});
	});
	
	// create open event for the first level of all comments
	$(document).on('click', '.open_all', function(){
		var first_level_comments = $("#comments-list > .content-list__item_comment");
		
		$.each(first_level_comments, function(index, item) {
			var button = $(this).find(".switch_btn").filter(':first');
			var opened = button.hasClass('opened') || !button.hasClass('closed');
			if (!opened) {
				button.click();	
			}
		});
	});

});