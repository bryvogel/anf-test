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
          $(".111").show().children().show();;
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
          $(".222").show().children().show();;
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
          $(".333").show().children().show();;
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
          $(".444").show().children().show();;
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
          $(".555").show().children().show();;
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
          $(".666").show().children().show();;
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
          $(".777").show().children().show();;
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
          $(".888").show().children().show();;
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
