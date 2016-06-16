$(document).on('ready', function() {

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


    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding : 7
        });

   
});