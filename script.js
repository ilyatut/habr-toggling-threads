$(document).ready(function(){
	
	// create button style
	var btn_style = [
		'float: right',
		'padding: 2px 7px',
		'margin-left: 5px',
		'color: #fff',
		'background: #8fafbf',
		'cursor: pointer',
		'border-radius: 3px',
		'text-align: center',
		'opacity: 0.3',
		'font-weight: normal',
	].join("; ");
	
	// create all single comment buttons
	var btn_html = '<span class="switch_btn" style="' + btn_style + ';">-</span>';
	$('.comment__head').append(btn_html);

	// create global control buttons
	btn_style += '; margin-top: 4px';
	var global_btns = 
		'<span class="close_first_level" style="' + btn_style + ';">- 1ый</span>' + 
		'<span class="open_first_level" style="' + btn_style + ';">+ 1ый</span>' + 
		'<span class="close_all" style="' + btn_style + ';">- все</span>' + 
		'<span class="open_all" style="' + btn_style + ';">+ все</span>'
	;
	$('.comments-section__subscribe-panel').append(global_btns);
	
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
	$(document).on('click', '.close_first_level', function(){
		$("#comments-list > .content-list__item_comment").each(function() {
			click_button($(this), true);
		});
	});
	
	// create open event for the first level of all comments
	$(document).on('click', '.open_first_level', function(){
		$("#comments-list > .content-list__item_comment").each(function() {
			click_button($(this), false);
		});
	});

	// create close event for all comments
	$(document).on('click', '.close_all', function(){
		$(".content-list__item_comment").each(function() {
			click_button($(this), true);
		});
	});
	
	// create open event for all comments
	$(document).on('click', '.open_all', function(){
		$(".content-list__item_comment").each(function() {
			click_button($(this), false);
		});
	});

	// click on a button in a comment block (closed or open)
	function click_button(element, find_opened) {
		var button = element.find(".switch_btn").filter(':first');
		var opened = button.hasClass('opened') || !button.hasClass('closed');
		if ((find_opened && opened ) || (!find_opened && !opened)) {
			button.click();	
		}
	}
});