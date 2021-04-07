var api = apiclient;
var funcione = (function () {

    function _map(list) {
        return mapList = list.countries.map(function (country) {
            return {countryname: country.countryName,
                statList: country.provinceStatsList,
                confirmed: country.totalConfirmed,
                deaths: country.totalDeaths,
                recovered: country.totalRecovered,
                location:country.localization};
        })
    }


    function _table(result) {
        countries = _map(result);
        $("#estadisticas > tbody").empty();
        countries.map(function (country) {
            $("#estadisticas > tbody").append(
                "<tr> <td>" +
                "<form><button class='btn btn-warning btn-lg btn-block' type='button' onclick='funcione.getCountryStatistics(\"" +
                country.countryname+ "\""+ ")' >"+country.countryname+"</button></form>"+
                "</td>" +
                "<td>" +
                country.deaths +
                "</td> " +
                "<td>" +
                country.confirmed+
                "</td> " +
                "<td>" +
                country.recovered+"</td>" +
                "</tr>"
            );
        });
    };
    function _tabled(country) {
        document.getElementById("nombrePais").innerHTML = country.countryName;
        $("#pais > tbody").empty();

        $("#pais > tbody").append(
            "<tr> <td> Num Deaths</td> <td>" +
            country.totalDeaths +
            "</td></tr>" +
            "<tr> <td> Num Confirmed</td> <td>" +
            country.totalConfirmed +
            "</td></tr>"+
            "<tr> <td> Num Recovered</td> <td>" +
            country.totalRecovered +
            "</td></tr>"

        );



        $("#porpais > tbody").empty();
        country.provinceStatsList.map(function (statd) {
            $("#porpais > tbody").append(
                "<tr> <td>" +
                statd.province+
                "</td>" +
                "<td>" +
                statd.city+
                "</td>" +
                "<td>" +
                statd.deaths +
                "</td> " +
                "<td>" +
                statd.confirmed+
                "</td> " +
                "<td>" +
                statd.recovered+"</td>" +
                "</tr>"
            );
        });
    };



    function plotMarkers(m)
    {
        iniciarMapa();
        markers = [];
        bounds = new google.maps.LatLngBounds();
        console.log(m);
        var position = new google.maps.LatLng(m.localization.latlng[0], m.localization.latlng[1]);
        console.log(position);
        markers.push(
            new google.maps.Marker({
                position: position,
                map: map,
                animation: google.maps.Animation.DROP
            })
        );

        bounds.extend(position);
        map.fitBounds(bounds);

    }

    function iniciarMapa() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 3
        });
    }
    function init (){
        iniciarMapa();
        api.getStatistics().then(function (data){
            _table(data);});


    }

    function getCountryStatistics(name) {
        api.getStatisticsByName(name).then(function (data){
            _tabled(data);
            plotMarkers(data)});
        window.scrollTo(0,document.body.scrollHeight);
    }


    return {
        init:init,
        getCountryStatistics:getCountryStatistics

    };
}());