class Map {
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
        var locationRio = {lat: 50.459598, lng: 30.435134};
        var map = new google.maps.Map(document.getElementById('thnr__map'), {
            zoom: 15,
            center: locationRio,
            gestureHandling: 'greedy'
        });

        var contentString = '<div id="content" style="text-align: center; font-family: Montserrat, sans-serif; color:#d40000">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<p>метро Шулявская,</p>'+
            '<p>Евгении Мирошниченко 6/11</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var coordinate = new google.maps.LatLng(50.459598, 30.435134);
        var marker = new google.maps.Marker({
            position: coordinate,
            map: map,
            draggable: false,
            title: '#TheNailRoom'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        /*var mapOptions = {
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
            '<p>метро Шулявская,</p>'+
            '<p>Евгении Мирошниченко 6/11</p>'+
            '</div>'+
            '</div>';


        var infowindow1 = new google.maps.InfoWindow({
            content: contentString1
        });

        var coordinate1 = new google.maps.LatLng(50.459598, 30.435134);
        var marker1 = new google.maps.Marker({
            position: coordinate1,
            map: map,
            draggable: false,
            title: '#TheNailRoom'
        });

        var bounds = new google.maps.LatLngBounds();
        bounds.extend(coordinate1);
        map.fitBounds(bounds);

        marker1.addListener('click', function() {
            infowindow1.open(map, marker1);
        });*/

    }


}

module.exports = Map;