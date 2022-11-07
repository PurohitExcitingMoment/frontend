$(document).ready(function(){
    $('#order').hide();
    $('#contact').hide();
    $('#services').hide();


    $('.order').click(function(){
        $('#order').show();
        $('#payment').hide();
        $('#contact').hide();
        $('#services').hide();
    });

    $('.payment').click(function(){
        $('#order').hide();
        $('#payment').show();
        $('#contact').hide();
        $('#services').hide();
    });

    $('.contact').click(function(){
        $('#order').hide();
        $('#payment').hide();
        $('#contact').show();
        $('#services').hide();
    });


    $('.services').click(function(){
        $('#order').hide();
        $('#payment').hide();
        $('#contact').hide();
        $('#services').show();
    });


    $('.otservice').hide();

    $('.other').click(function(){
        $('.otservice').show();
    });

    
});