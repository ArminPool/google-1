var Slides = {
    totalSlides: 0,
    container: $('#slides'),
    slideWidth: 0,
    translateAmount: 0,
    currentSlide: 0,

    init: function (totalSlides) {
        if (!totalSlides) {
            throw new Error('please pass the total number of slide');
        }
        Slides.totalSlides = totalSlides;

        Slides.loadContent();

        Slides.setSlideWidth();
        Slides.keyPress();
    },

    loadContent: function () {
        var frag = document.createDocumentFragment(),
            bit;

        for (var i = 0; i < Slides.totalSlides; ++i) {
            bit = $('<div id="slide-' + i + '"></div>')
                .load('slides/' + i + '.html')[0];
            console.log(bit);
            frag.appendChild(bit);
        }
        Slides.container.append(frag);
    },

    keyPress: function () {
        $(document).keydown(function (e) {
            // if left or right arrow key is pressed
            if (e.which === 39 || e.which === 37) {
                e.preventDefault();
                e.which === 39 ? Slides.next() : Slides.prev();
            }
        });
    },

    // determine the width of the slide
    setSlideWidth: function () {
        var each = Slides.container.children('div');
        Slides.slideWidth = each.width() + (parseInt(each.css('margin-right'), 10));
    },

    next: function () {
        Slides.translateAmount -= Slides.slideWidth;
        Slides.updateHash(++Slides.currentSlide);
        Slides.animate();
    },

    prev: function () {
        // no more left to go back
        if (Slides.translateAmount === 0) {
            return;
        }

        Slides.translateAmount += Slides.slideWidth;
        Slides.updateHash(--Slides.currentSlide);
        Slides.animate();
    },

    animate: function () {
        Slides.container
            .children()
            .css('-webkit-transform', 'translateX(' + 
                Slides.translateAmount + 'px)');
    },

    updateHash: function () {
        location.hash = '#slide-' + Slides.currentSlide;
    }
};