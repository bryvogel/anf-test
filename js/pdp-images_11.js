$(document).ready(function() {


    /***************** Swatch Change ******************/

        $(function() {
          $('#a').siblings().addClass('hide');

        });


        $(':radio').change(function (event) {
            var id = $(this).data('id');
            $('#' + id).removeClass('hide').siblings().addClass('hide');
        });


        $(':radio').change(function (event) {
            var id = $(this).data('id');
            $('#' + id).removeClass('hide').siblings().addClass('hide');
        });


        /***************** Bag Validation ******************/


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
        }
        else if(radio_value=='222') {
          $(".one").hide();
          $(".two").show();
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
        }
        else if(radio_value=='333') {
          $(".one").hide();
          $(".two").hide();
          $(".three").show();
          $(".four").hide();
          $(".five").hide();
          $(".six").hide();
        }
        else if(radio_value=='444') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").show();
          $(".five").hide();
          $(".six").hide();
        }
        else if(radio_value=='555') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").hide();
          $(".five").show();
          $(".six").hide();
        }
        else if(radio_value=='666') {
          $(".one").hide();
          $(".two").hide();
          $(".three").hide();
          $(".four").hide();
          $(".five").hide();
          $(".six").show();
        }
        });
        $('[name="swatch"]:checked').trigger('click');

        /***************** Smooth Scroll ******************/


    $(".scroll").click(function(event){
            event.preventDefault();
            //calculate destination place
            var dest=0;
            if($(this.hash).offset().top > $(document).height()-$(window).height()){
                 dest=$(document).height()-$(window).height();
            }else{
                 dest=$(this.hash).offset().top;
            }
            $('html,body').animate({scrollTop:dest}, 1000,'swing');
        });

        $(".scroll2").click(function(event){
                event.preventDefault();
                //calculate destination place
                var dest=0;
                if($(this.hash).offset().top > $(document).height()-$(window).height()){
                     dest=$(document).height()-$(window).height();
                }else{
                     dest=$(this.hash).offset().top -80;
                }
                $('html,body').animate({scrollTop:dest}, 500,'swing');
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


    /***************** Image Resize ******************/

    $('.product').on('click', function() {
        $(this).toggleClass('clicked').siblings().removeClass('clicked');
    });





    /***************** Wayfinding ******************/



    $('.wayfinding a').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('img[data-anchor="' + scrollAnchor + '"]').offset().top - 80;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500,'swing');

        return false;

    })


    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 55) {
            $('.wayfinding').addClass('stay');
            // $('.product-images img').each(function(i) {
            //     if ($(this).position().top <= windscroll - 30) {
            //         $('.wayfinding div.selected').toggleClass('selected');
            //         $('.wayfinding div').eq(i).toggleClass('selected');
            //     }
            // });

        } else {

            $('.wayfinding').removeClass('stay');
            // $('.wayfinding div.selected').removeClass('selected');
            // $('.wayfinding div:first').addClass('selected');
        }

    }).scroll();







});
