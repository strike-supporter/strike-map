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
            content: getInfoContent(factory.name, factory.supportTime)
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
                lng: 27.617347
            },
        supportTime: ''
    },

    {
        name: "МАЗ",
        coords:
            {
                lat: 53.862249,
                lng: 27.653814
            },
        supportTime: 'до 17 00'
    },
    {
        name: "МЗКТ",
        coords:
            {
                lat: 53.858023,
                lng: 27.673161
            },
        supportTime: ''
    },
    {
        name: "БелАЗ",
        coords:
            {
                lat: 54.101058,
                lng: 28.328612
            },
        supportTime: ''
    },
    {
        name: "Белтелерадиокомпания",
        coords:
            {
                lat: 53.923545,
                lng: 27.628524
            },
        supportTime: 'c 9:00 до 18:00'
    },
    {
        name: "ОНТ",
        coords:
            {
                lat: 53.909268,
                lng: 27.571096
            },
        supportTime: ''
    },
    {
        name: "МИНСКИЙ ЭЛЕКТРОТЕХНИЧЕСКИЙ ЗАВОД",
        coords:
            {
                lat: 53.900749,
                lng: 27.612654
            },
        supportTime: ''
    },
    {
        name: "МИНСКИЙ МОТОРНЫЙ ЗАВОД",
        coords:
            {
                lat: 53.889003,
                lng: 27.633660
            },
        supportTime: ''
    }
];


function getInfoContent(factoryName, supportTime) {
    return `<h3>${factoryName}</h3>
<p><b>Поддержать можно:</b> ${supportTime}</p>
`;
}
