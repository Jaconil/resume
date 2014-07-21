$(document).ready(function() {

    function addTransition(element) {
        $(this).addClass('transition');
    }

    // Fondus
        $('header li a, nav a').hide();
        $('#photo img').hide().fadeIn(2000, function() {
            $(this).addClass('transition');

            $('nav a').fadeIn(2800, addTransition);

            $('header li.github a').fadeIn(1200, addTransition);
            $('header li.linkedin a').fadeIn(1600, addTransition);
            $('header li.viadeo a').fadeIn(2000, addTransition);
            $('header li.socialnetworks a').fadeIn(2000, addTransition);
            $('header li.dyb a').fadeIn(2400, addTransition);
            $('header li.pdf a').fadeIn(2800, addTransition);
            $('header li.back a').fadeIn(2800, addTransition);
        });

        $('header li a').tooltip({
            placement: 'bottom'
        });

    // Effet typewriter
        var element = $('#about div');
        var data = [];

        element.text().trim().split('\n').every(function(element, index, array) {
            data.push(element.trim());
            data.push({text: '          ', element: '<span></span>'});
            return index < array.length;
        });

        element.typewriter(data, 0, 0);

    // Timeline
        var topResume = $('#timeline').offset().top; // FIXME: changer à chaque resize

        $(window).scroll(function() {
            var currentScroll = $(window).scrollTop();
            if (currentScroll < topResume - 50) {
                $('#timeline, #resume').removeClass('fixed');
            } else {
                $('#timeline, #resume').addClass('fixed');
            }
        });

    // Next
        $('nav a.next').on('click', function() {
            var topNext = $('a.back', $(this).parent()).offset().top;
            $('html, body').animate({
                scrollTop: topNext
            }, 1000);
            return false;
        });

        $('nav a.back').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
});

