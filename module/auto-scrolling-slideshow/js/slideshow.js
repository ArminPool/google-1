var $slideshow = {
    context: false,
    tabs: false,
    timeout: 1000,      // time before next slide appears
    slideSpeed: 1000,   // time it takes to slide in each slide
    tabSpeed: 300,      // time it takes to slide in each slide 
                        // when clicking through tabs
    fx: 'scrollLeft',   // the slide effect to use

    init: function () {
        // set the context to help speed up selectors/improve performance
        this.context = $('#slideshow');

        // set tabs to current hard coded navigation items
        this.tabs = $('ul.slides-nav li', this.context);

        // remove hard coded navigation items from DOM
        // because they aren't hooked up to jQuery cycle
        this.tabs.remove();

        // prepare slideshow and jQuery cycle tabs
        this.prepareSlideshow();
    },

    prepareSlideshow: function () {
        // initialise the jquery cycle plugin
        // for information on the options set below go to:
        // http://jquery.malsup.com/cycle/
        $('div.slides > ul', $slideshow.context).cycle({
            fx: $slideshow.fx,
            timeout: $slideshow.timeout,
            speed: $slideshow.slideSpeed,
            fastOnEvent: $slideshow.tabSpeed,
            pager: $('ul.slides-nav', $slideshow.context),
            pagerAnchorBuilder: $slideshow.prepareTabs,
            before: $slideshow.activeTab,
            pauseOnPagerHover: true,
            pause: true
        });
    },

    prepareTabs: function (i, slide) {
        // return markup from hardcoded tabs for use as jQuery tabs
        return $slideshow.tabs.eq(i);
    },

    activeTab: function (currentSlide, nextSlide) {
        var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshow.context);

        // if there is an active tab
        if (activeTab.length) {
            // remove active styling from all other tabs
            $slideshow.tabs.removeClass('on');

            // add active styling to active button
            activeTab.parent().addClass('on');
        }
    }
};

jQuery(function () {
    $slideshow.init();
});