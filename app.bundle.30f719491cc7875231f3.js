webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(13);
module.exports = __webpack_require__(14);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const Header = __webpack_require__(8);
const Slick = __webpack_require__(9);
const Scroll = __webpack_require__(10);
const Carousel = __webpack_require__(11);
const Map = __webpack_require__(12);

class App {
    init() {
        this.headerModule = new Header().init();
        this.slickModule = new Slick().init();
        this.scrollModule = new Scroll().init();
        this.carouselModule = new Carousel().init();
        this.mapModule = new Map().init();
    }
}

new App().init();


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {class Header {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.header = $('.thnr__header');
        this.cache.page = $('.thnr__page');
    }
    initializeEvents() {
        this.cache.header.on('click', () => {
            this.toggleMenu();
        })
        this.cache.page.on('click', () => {
            this.cache.header.stop(true, false).removeClass('opened');
        })
    }

    toggleMenu() {
        this.cache.header.stop(true, false).toggleClass('opened');
    }

}

module.exports = Header;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(1);

class Slick {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.slickNav = $('.thnr__slick-for');
        this.cache.slickItem = $('.slick-gal-wrap');
    }
    initializeEvents() {
        this.cache.slickItem.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            fade: true,
            asNavFor: this.cache.slickNav
        });
        this.cache.slickNav.slick({
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: true,
            asNavFor: this.cache.slickItem,
            dots: true,
            arrows: true,
            centerMode: true,
            focusOnSelect: true
        });

    }
}

module.exports = Slick;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {class Scroll {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.header = $('.thnr__header');
        this.cache.page = $('.thnr__page');      
    }
    initializeEvents() {
        this.cache.header.on('click', () => {
            this.slowScroll();
        })
            
    }    

    slowScroll() {
        $(this.cache.document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
    }

}

module.exports = Scroll;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {class Carousel {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.photoItem = $('.thnr__about__item');
        this.cache.textItem = $('.thnr__about__description');
    }
    initializeEvents() {
        this.cache.photoItem.on('click', (e) => {
            this.showMe(e);
        });
    }

    showMe(e) {
        this.cache.photoItem.removeClass('active');
        $(e.target).closest('.thnr__about__item').addClass('active');
    }
}

module.exports = Carousel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {class Map {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.window = $(window);
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.page = $('.thnr__page');  
        this.cache.contact = $('.thnr__contact-us'); 
        this.cache.map = $('#thnr__map');
    }
    
   initializeEvents() {
        this.cache.window.on('load', () => {
            this.showGoogleMaps();
        });
        
    }

showGoogleMaps() {
    var mapOptions = {
        zoom: 13,
        streetViewControl: false,
        scaleControl: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: 50.459085, lng: 30.468437}
    
    };
    
    var map = new google.maps.Map(document.getElementById('thnr__map'), mapOptions);

   
var contentString1 = '<div id="content" style="text-align: center; font-family: Montserrat, sans-serif; color:#d40000">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<div id="bodyContent">'+
    '<p>метро Берестейская</p>'+
    '<p>проспект Победы, 80/57</p>'+
    '</div>'+
    '</div>';

var contentString2 = '<div id="content" style="text-align: center; font-family: Montserrat, sans-serif; color:#d40000">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<div id="bodyContent">'+
    '<p>метро Крещатик</p>'+
    '<p>улица Лютеранская, 13</p>'+
    '</div>'+
    '</div>';

var infowindow1 = new google.maps.InfoWindow({
            content: contentString1
        });
    
var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
        });
var coordinate1 = new google.maps.LatLng(50.45848248, 30.42355523);
var marker1 = new google.maps.Marker({
            position: coordinate1,
            map: map,
            draggable: false,
            title: '#TheNailRoom'
        });
var coordinate2 = new google.maps.LatLng(50.44536693, 30.52532868);
var marker2 = new google.maps.Marker({
            position: coordinate2,
            map: map,
            draggable: false,
            title: '#TheNailRoom'
        });

var bounds = new google.maps.LatLngBounds();
        bounds.extend(coordinate1);
        bounds.extend(coordinate2);
        map.fitBounds(bounds);

marker1.addListener('click', function() {
            infowindow1.open(map, marker1),
            infowindow2.close(map, marker2);
        });
marker2.addListener('click', function() {
            infowindow2.open(map, marker2),
            infowindow1.close(map, marker1);
        });


}


}

module.exports = Map;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[6]);