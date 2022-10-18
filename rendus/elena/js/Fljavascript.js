$( function() {


    $(".draggable").draggable({
        helper: 'clone',
        revert: "invalid",
        appendTo: "body"

    });
    
    $("body").droppable({
        drop: function(event, ui) {
            //if (ui.draggable[0].id) {
                $(this).append($(ui.helper).clone().css('z-index','201').draggable());
            //}
        }
    });
  } );