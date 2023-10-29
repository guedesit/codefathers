var accessToken;
function getAccessToken() {
    // Make the AJAX call to authenticate
    $.ajax({
        url: 'https://resilient-goat-k6vpzc-dev-ed.trailblaze.my.salesforce.com/services/oauth2/token',
        type: 'POST',
        data: {
            grant_type: 'password',
            username: '{{secrets.USERNAME}}',
            client_id: '{{secrets.CLIENT_ID}}',
            client_secret: '{{secrets.CLIENT_SECRET}}',
            password: '{{secrets.PASSWORD}}'
        },
        success: function(response) {
            // Handle the success response
            console.log(response);
            // Store the access token for future use
            accessToken = response.access_token;
            // Use the access token to make further API calls
            // ...
        },
        error: function(xhr, status, error) {
            // Handle the error response
            console.log(error);
        }
    });
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
    // Get the form element
    var form = $('#findCrime');

    // Attach a submit event handler to the form
    form.submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();

        getAccessToken();

        console.log('token' + getAccessToken);

        // Get the value from the 'priceQuestion' input
        var priceQuestion = $('#priceQuestion').val();

        // Make the AJAX call
        $.ajax({
        url: 'your-api-endpoint',
        type: 'GET',
        data: { priceQuestion: priceQuestion },
        success: function(response) {
            // Handle the success response
            console.log(response);
        },
        error: function(xhr, status, error) {
            // Handle the error response
            console.log(error);
        }
        });
    });
    
})(jQuery);

