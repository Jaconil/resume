(function ($) {
    $.fn.typewriter = function(data, index, subIndex) {
        var element = this;

        if (index === 0 && subIndex === 0) {
            element.html('');
        }

        if (index < data.length) {
            var el = data[index];
            var delay = 50;
            var text = el;
            var elementToWrite = element;

            if (typeof el === 'object') {
                if (el.element && subIndex === 0) {
                    var newElem = $(el.element);
                    newElem.addClass('typewriter-' + index);
                    element.append(newElem);
                }

                text = el.text;
                elementToWrite = $('.typewriter-' + index, element);
            }

            if (subIndex < text.length) {
                elementToWrite.append(text[subIndex]);
                subIndex++;
            } else {
                subIndex = 0;
                index++;
                delay = 0;
            }

            setTimeout(function() {
                element.typewriter(data, index, subIndex);
            }, delay);
        }

        return this;
    };
}(jQuery));
