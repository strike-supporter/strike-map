function initMap(listener) {
    let minskCenter = {
        lat: 53.903206,
        lng: 27.560451
    };
    map = new google.maps.Map(document.getElementById("map"), {
        center: minskCenter,
        zoom: 12,
        gestureHandling: 'greedy'
    });

    factories.forEach(factory => {
        var infowindow = new google.maps.InfoWindow({
            content: getInfoContent(factory.name, factory.strikePeopleNumber)
        });

        var marker = new google.maps.Marker({
            position: factory.coords,
            map: map,
            title: factory.name
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });


}

factories = [
    {
        name: "МТЗ",
        coords:
            {
                lat: 53.890619,
                lng:  27.617347
            },
        strikePeopleNumber: 20
    },

    {
        name: "МАЗ",
        coords:
            {
                lat: 53.862249,
                lng: 27.653814
            },
        strikePeopleNumber: 20
    },
    {
        name: "МЗКТ",
        coords:
            {
                lat: 53.858023,
                lng: 27.673161
            },
        strikePeopleNumber: 20
    },
] ;

function getInfoContent(factoryName, strikePeopleNumber) {
    return `<h3>${factoryName}</h3>
<p>Бастует около ${strikePeopleNumber}</p>
`;
}
