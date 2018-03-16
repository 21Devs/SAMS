$(document).ready(function(){
	$.widget( "custom.iconselectmenu", $.ui.selectmenu, {
		_renderItem: function( ul, item ) {
          	var li = $( "<li>" ),
            	wrapper = $( "<div>", { text: item.label } );
	   
          	$( "<span>", {
	            style: item.element.attr( "data-style" ),
	            "class": "ui-icon " + item.element.attr( "data-class" )
          	})
            .appendTo( wrapper );
	   
          	return li.append( wrapper ).appendTo( ul );
        }
	});

	$( "#country_code" )
    .iconselectmenu()
    .iconselectmenu( "menuWidget" )
      .addClass( "ui-menu-icons customicons" );

});