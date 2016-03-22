//animate section
$(document).ready(function() {
    function close_accordion_section() {
        $('.menu-btn').removeClass('active');
        $('.mainnews').slideUp(300).removeClass('open');
    }
 
    $('.menu-btn').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.menu-btn' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});



//transitions
$(document).ready(function() {
     $('#ball1').click(function() {
          $('#mainnews1').animate({
               height: 'toggle'
               }, 400
          );
     });
});

$(document).ready(function() {
     $('#ball2').click(function() {
          $('#mainnews2').animate({
               height: 'toggle'
               }, 400
          );
     });
});

$(document).ready(function() {
     $('#ball3').click(function() {
          $('#mainnews3').animate({
               height: 'toggle'
               }, 400
          );
     });
});

$(document).ready(function() {
     $('#ball4').click(function() {
          $('#mainnews4').animate({
               height: 'toggle'
               }, 400
          );
     });
});
		
