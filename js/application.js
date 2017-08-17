
$(document).ready(function(){
	$('#no_laborables').click(function(){
		$.getJSON("http://nolaborables.com.ar/api/v2/feriados/2017").done(function(datos_del_ws){
			$.each(datos_del_ws,function(indice,valor){
				$('#lista_no_laborables').append(
					"<li> <h4>Feriado: </h4>" + 
					"Motivo: " + valor.motivo + "<br> Tipo de feriado: " + valor.tipo + "<br> Día: " + 
					valor.dia + "<br> Mes: " + valor.mes +
					 "</li>"
				);
			});
		});
	});

});