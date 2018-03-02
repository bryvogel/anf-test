$(document).ready(function() {

    /***************** Image Change ******************/



        $(':radio').change(function (event) {
            var id = $(this).data('id');
            $('#' + id).removeClass('hide').siblings().addClass('hide');
        });

        $('.length').on('change', function() {
           $('.length').not(this).prop('checked', false);
        });

        $('.size').on('change', function() {
           $('.size').not(this).prop('checked', false);
        });


        $('#submitBtn').on('click', function() {
            var valid = $('.main').toArray().every(function(item) {
                return $(item).find('input[type="checkbox"]:checked').length >= 1;
            });
            if (valid >= 1) {
              $(".test").addClass('hide');
              $('#success').show("fast",0).delay(1600).hide("fast",0);
            } else {
              $(".test").removeClass('hide');
            }
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




        $(".scroll").click(function(event){
                event.preventDefault();
                //calculate destination place
                var dest=0;
                if($(this.hash).offset().top > $(document).height()-$(window).height()){
                     dest=$(document).height()-$(window).height();
                }else{
                     dest=$(this.hash).offset().top;
                }
                //go to destination
                $('html,body').animate({scrollTop:dest}, 1000,'swing');
            });


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
