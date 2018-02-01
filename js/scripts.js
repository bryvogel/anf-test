$(document).ready(function() {

    /***************** Image Change ******************/



        $(':radio').change(function (event) {
            var id = $(this).data('id');
            $('#' + id).removeClass('hide').siblings().addClass('hide');
        });

        $('input[type="checkbox"]').on('change', function() {
           $('input[type="checkbox"]').not(this).prop('checked', false);
        });

        $('.main-carousel').bxSlider();

        $('.swatch').click(function(){
        var radio_value = $(this).val();
        if(radio_value=='111') {
          $(".one").css('z-index', 1);
          $(".two").css('z-index', 3000);
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").hide();
        }
        else if(radio_value=='222') {
          $(".one").css('z-index', 3000);
          $(".two").css('z-index', 1);
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").hide();
        }
        else if(radio_value=='333') {
          $(".one").hide();
          $(".two").hide();
          $(".three").show().children().show();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").hide();
        }
        else if(radio_value=='444') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").show().children().show();
          $(".five").hide();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").hide();
        }
        else if(radio_value=='555') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").hide();
          $(".five").show().children().show();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").hide();
        }
        else if(radio_value=='666') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").show().children().show();
          $(".seven").hide();
          $(".eight").hide();
        }
        else if(radio_value=='777') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
          $(".seven").show().children().show();
          $(".eight").hide();
        }
        else if(radio_value=='888') {
          $(".one").hide();
          $(".two").hide();
          $(".333").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").show().children().show();
        }
        });
        $('[name="swatch"]:checked').trigger('click');


    /***************** Responsive Nav ******************/

    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.navicon').toggleClass('fixed');
        $('.primary-nav-wrapper').toggleClass('open');
        event.preventDefault();
    });
    $('.primary-nav-wrapper li a').click(function() {
        $('.nav-toggle').toggleClass('active');
        $('.navicon').toggleClass('fixed');
        $('.primary-nav-wrapper').toggleClass('open');
    });

  });
