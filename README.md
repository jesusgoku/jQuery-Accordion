## jQuery Accordion v0.1

Plugin para implementar un __accordion__ con __jQuery__ para optimizar el mostrar gran informacion en poco espacio.

## Uso

Estructura HTML sobre la que funcionara el plugin

	<div class="accordion">
		<h3><a href="#">Uno</a></h3>
		<div>Contenido de uno</div>
		<h3><a href="#">Dos</a></h3>
		<div>Contenido de dos</div>
		<h3><a href="#">Tres</a></h3>
		<div>Contenido de tres</div>
	</div>

Incluir __jQuery__ y el __plugins__ entre las etiquetas __head__ de tu html:

	<script type="text/javascript" src="jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="jquery.accordion-v0.1.min.js"></script>

Aplicar el plugin sobre la estructura html:

	$(function(){
		$('.accordion').accordion({
			oneView: true, // Indica si de debe mostrar uno a la vez o multiples
			applyStyle: true, // Si es verdadero se aplicaran estilos, de lo contrario se espera que aplique estilos por css
			titleColor: '#000', // Color del titulo
			titleBackground: '#A9D06A', // Fondo del titulo
			titleBorderColor: '#CDE99F', // Borde titulo
			bodyColor: '#000', // Color del texto del cuerpo
			bodyBackground: '#FFF', // Fondo del cuerpo
			borderRadius: '0' // Tamano del borde redondiado
		});
	});

## Desarrollador

__JesusGoku__ [@jesusgoku](http://twitter.com/jesusgoku)