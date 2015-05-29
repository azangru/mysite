//= require 'jquery-1.11.1'
//= require jquery.ui.all
//= require_tree .

$ ->

	# $('.resume').hide()
	# $('.portfolio').hide()
	$('.site-section').hide()
	$('.portfolio-section').hide()


	$('a.round-button').click ->
		sectionName = $(this).data('section')
		if $('.site-section:visible').length >= 1
			$('.site-section:visible').fadeOut 500, ->
				$(".#{sectionName}").fadeIn(500)
		else
			$(".#{sectionName}").fadeIn(1000)

	$('.portfolio nav li a').click (e)->
		e.preventDefault()
		$('.portfolio nav li a').removeClass('active')
		$(this).addClass('active')
		linkOrder = parseInt($(this).data('order'))
		if $('.portfolio-section:visible').length == 0
			$(".portfolio-section[data-order='#{linkOrder}']").fadeIn(1000)
		else
			divOrder = parseInt($('.portfolio-section:visible').data('order'))
			height = $('.portfolio-section:visible').height()
			nextHeight = $(".portfolio-section[data-order='#{linkOrder}']").height()
			$('.portfolio').height(height)
			if linkOrder > divOrder
				$('.portfolio-section:visible').hide 'slide', {direction: 'left'}, 500, () ->
					$(".portfolio-section[data-order='#{linkOrder}']").show('slide', {direction: 'right'}, 500)
			if linkOrder < divOrder
				$('.portfolio-section:visible').hide 'slide', {direction: 'right'}, 500, () ->
					$(".portfolio-section[data-order='#{linkOrder}']").show('slide', {direction: 'left'}, 500)

			$('.portfolio').height(nextHeight);