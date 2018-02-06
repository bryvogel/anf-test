$(document).ready(function() {

    /***************** Image Change ******************/



        $(':radio').change(function (event) {
            var id = $(this).data('id');
            $('#' + id).removeClass('hide').siblings().addClass('hide');
        });

        $('input[type="checkbox"]').on('change', function() {
           $('input[type="checkbox"]').not(this).prop('checked', false);
        });

        // $('.main-carousel').bxSlider();

        var mySlider;

        $(function() {
            mySlider = $('.main-carousel').bxSlider({
                easing: 'easeInCubic',
                displaySlideQty: 1,
                moveSlideQty: 1,
                infiniteLoop: true,
                hideControlOnEnd: true,
                onSliderLoad: function() {
                  $(".one").show();
                  $(".two").hide();
                  $(".three").hide();
                  $(".four").hide();
                  $(".five").hide();
                  $(".six").hide();
                  $(".seven").hide();
                  $(".eight").hide();
                }
            });
        });

        $('.swatch').click(function(){
        var radio_value = $(this).val();
        if(radio_value=='111') {
          $(".one").show();
          $(".two").hide();
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").hide();
        }
        else if(radio_value=='222') {
          $(".one").hide();
          $(".two").show();
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
          $(".three").show();
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
          $(".four").show();
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
          $(".five").show();
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
          $(".six").show();
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
          $(".seven").show();
          $(".eight").hide();
        }
        else if(radio_value=='888') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
          $(".seven").hide();
          $(".eight").show();
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
