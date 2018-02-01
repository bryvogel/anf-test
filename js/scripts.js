$(document).ready(function() {

    /***************** Image Change ******************/



        $(':radio').change(function (event) {
            var id = $(this).data('id');
            $('#' + id).removeClass('hide').siblings().addClass('hide');
        });

        $('input[type="checkbox"]').on('change', function() {
           $('input[type="checkbox"]').not(this).prop('checked', false);
        });

        // $('.main-carousel').flickity({
        //   // options
        //   cellAlign: 'left',
        //   contain: true,
        //   wrapAround: true,
        //   prevNextButtons: false
        // });

        $('.main-carousel').bxSlider();

        $("input[name$='swatch']").click(function(){
        var radio_value = $(this).val();
        if(radio_value=='111') {
          $(".111").show();
          $(".222").hide();
          $(".333").hide();
          $(".444").hide();
          $(".555").hide();
          $(".666").hide();
          $(".777").hide();
          $(".888").hide();
        }
        else if(radio_value=='222') {
          $(".111").hide();
          $(".222").show();
          $(".333").hide();
          $(".444").hide();
          $(".555").hide();
          $(".666").hide();
          $(".777").hide();
          $(".888").hide();
        }
        else if(radio_value=='333') {
          $(".111").hide();
          $(".222").hide();
          $(".333").show();
          $(".444").hide();
          $(".555").hide();
          $(".666").hide();
          $(".777").hide();
          $(".888").hide();
        }
        else if(radio_value=='444') {
          $(".111").hide();
          $(".222").hide();
          $(".333").hide();
          $(".444").show();
          $(".555").hide();
          $(".666").hide();
          $(".777").hide();
          $(".888").hide();
        }
        else if(radio_value=='555') {
          $(".111").hide();
          $(".222").hide();
          $(".333").hide();
          $(".444").hide();
          $(".555").show();
          $(".666").hide();
          $(".777").hide();
          $(".888").hide();
        }
        else if(radio_value=='666') {
          $(".111").hide();
          $(".222").hide();
          $(".333").hide();
          $(".444").hide();
          $(".555").hide();
          $(".666").show();
          $(".777").hide();
          $(".888").hide();
        }
        else if(radio_value=='777') {
          $(".111").hide();
          $(".222").hide();
          $(".333").hide();
          $(".444").hide();
          $(".555").hide();
          $(".666").hide();
          $(".777").show();
          $(".888").hide();
        }
        else if(radio_value=='888') {
          $(".111").hide();
          $(".222").hide();
          $(".333").hide();
          $(".444").hide();
          $(".555").hide();
          $(".666").hide();
          $(".777").hide();
          $(".888").show();
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
