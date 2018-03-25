$(document).ready(function() {


    /***************** Swatch Change ******************/

        $(function() {
          $('.a').siblings().addClass('hide');
          $('.5').siblings().addClass('hide');
        });


        $(':radio').change(function (event) {
            var id = $(this).data('id');
            var thumbs = $(this).data('thumbs');
            $('.' + id).removeClass('hide').siblings().addClass('hide');
            $('.' + thumbs).removeClass('hide').siblings().addClass('hide');
        });


        $(':radio').change(function (event) {
            var id = $(this).data('id');
            var thumbs = $(this).data('thumbs');
            $('.' + id).removeClass('hide').siblings().addClass('hide');
            $('.' + thumbs).removeClass('hide').siblings().addClass('hide');
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
        $(this).toggleClass('clicked');
    });


    /***************** Zoom ******************/

     (function() {

      // Get all images with the `detail-view` class
      var zoomBoxes = document.querySelectorAll('.detail-view');

      // Extract the URL
      zoomBoxes.forEach(function(image) {
        var imageCss = window.getComputedStyle(image, false),
          imageUrl = imageCss.backgroundImage
                             .slice(4, -1).replace(/['"]/g, '');

        // Get the original source image
        var imageSrc = new Image();
        imageSrc.onload = function() {
          var imageWidth = imageSrc.naturalWidth,
              imageHeight = imageSrc.naturalHeight,
              ratio = imageHeight / imageWidth;

          // Adjust the box to fit the image and to adapt responsively
          var percentage = ratio * 100 + '%';
          image.style.paddingBottom = percentage;

          // Zoom and scan on mousemove
          image.onmousemove = function(e) {
            // Get the width of the thumbnail
            var boxWidth = image.clientWidth,
                // Get the cursor position, minus element offset
                x = e.pageX - this.offsetLeft,
                y = e.pageY - this.offsetTop,
                // Convert coordinates to % of elem. width & height
                xPercent = x / (boxWidth / 80) + '%',
                yPercent = y / (boxWidth * ratio / 80) + '%';

            // Update styles w/actual size
            Object.assign(image.style, {
              backgroundPosition: xPercent + ' ' + yPercent,
              backgroundSize: imageWidth + 'px'
            });
          };

          // Reset when mouse leaves
          image.onmouseleave = function(e) {
            Object.assign(image.style, {
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            });
          };
        }
        imageSrc.src = imageUrl;
      });
    })();



    /***************** Wayfinding ******************/



    $('.wayfinding a').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 80;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500,'swing');

        return false;

    });


    /***************** Sticky Rails ******************/


    $(document.body).trigger('sticky_kit:recalc');

    $("#space, .product-info").stick_in_parent({
    	offset_top: 80,
      parent: '.product-page__main-container',
      recalc_every: 1
    });




});
