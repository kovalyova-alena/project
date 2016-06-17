$(document).on('ready', function() {

    /*----------------Accordion -------------------*/
       $('div.panel-heading').on('click', function(e) {
        var currentId = $(this).attr('id');
        $(".sprite_accordion").css('background-position', 'top');
        $("#" + currentId +" "+".sprite_accordion").css('background-position', 'bottom');
        $('.panel-heading').css('background', '#fff');
        $("#" + currentId).css('background', '#ebc339');
       
    });


    /*----------------Gallery -------------------*/
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding : 7
        });


    /*----------------AJAX Send Form -------------------*/
        $("#modal_submit").on('submit', function(e) {
    		e.preventDefault();
            var FormData;
            FormData = $(this).serialize(); 
            console.log(FormData);
            $.ajax({
            type: "POST", 
            url: "../send.php", 
            data: FormData,
            success: function() {
                   alert("Your message has been sent!");
            }
            });
        });








});