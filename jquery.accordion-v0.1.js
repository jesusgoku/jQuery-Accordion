/*****************************************************************************
/* Nombre: jQuery Accordion
/* Version: 0.1
/* Desarrollador: JesusGoku
/* URL: http://twitter.com/jesusgoku
/*
/******************************************************************************/
(function($){
	$.fn.accordion = function(custom){
		var defaults = {
			oneView: true, // Indica si de debe mostrar uno a la vez o multiples
			applyStyle: true, // Si es verdadero se aplicaran estilos, de lo contrario se espera que aplique estilos por css
			titleColor: '#000', // Color del titulo
			titleBackground: '#A9D06A', // Fondo del titulo
			titleBorderColor: '#CDE99F', // Borde titulo
			bodyColor: '#000', // Color del texto del cuerpo
			bodyBackground: '#FFF', // Fondo del cuerpo
			borderRadius: '0' // Tamano del borde redondiado
		};

		var settings = $.extend({},defaults,custom);

		return this.each(function(){
			var obj = $(this);

			var title = $('> h3 a', obj);
			var body = $('> div', obj);
			
			if(settings.applyStyle){
				obj.css({
					'border': '1px solid ' + settings.titleBorderColor,
					'border-bottom': 'none'
				});

				$('> h3', obj).css({
					'font-size': '15px',
					'margin-bottom': '0',
					'margin-top': '0'
				});

				title.css({
					'text-decoration': 'none',
					'color': settings.titleColor,
					'background-color': settings.titleBackground,
					'display': 'block',
					'padding': '5px',
					'-moz-border-radius': settings.borderRadius,
					'-webkit-border-radius': settings.borderRadius,
					'border-radius': settings.borderRadius,
					'font-weight': 'normal',
					'border-bottom': '1px solid ' + settings.titleBorderColor
				});

				body.css({
					'color': settings.bodyColor,
					'background-color': settings.bodyBackground,
					'padding': '10px 5px',
					'-moz-border-radius': settings.borderRadius,
					'-webkit-border-radius': settings.borderRadius,
					'border-radius': settings.borderRadius,
					'margin-bottom': '0'
				});
			}

			body.hide();
			title.click(function(e){
				var $this = $(this);
				e.preventDefault();
				if( settings.oneView ){
					if( $this.parent().next().is(':visible') ){
						$this.parent().next().slideUp();
					}else{
						if($(this).closest('.accordion').find('> div:visible').length){
							$(this).closest('.accordion').find('> div:visible').slideUp(function(){
								$this.parent().next().slideDown();
							});
						}else $this.parent().next().slideDown();
					}
				}else{
					 $this.parent().next().slideToggle();
				}
			});
		});
	}
})(jQuery);