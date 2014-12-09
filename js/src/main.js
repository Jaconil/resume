$(document).ready(function() {

    function addTransition() {
        $(this).addClass('transition');
    }

    // Fondus
    $('li a, nav a').hide();
    $('#photo img').hide().fadeIn(2000, function() {
        $(this).addClass('transition');

        $('li.github a').fadeIn(1200, addTransition);
        $('li.linkedin a').fadeIn(1600, addTransition);
        $('li.viadeo a').fadeIn(2000, addTransition);
        $('li.socialnetworks a').fadeIn(2000, addTransition);
        $('li.dyb a').fadeIn(2400, addTransition);
        $('li.pdf a').fadeIn(2800, addTransition);
        $('li.back a').fadeIn(2800, addTransition);
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

    // Infobulles
    $('header li a').tooltip({
        placement: 'bottom'
    });
});
