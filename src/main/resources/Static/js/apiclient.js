apiclient = (function() {

    return {
        getStatisticsByName: function(name) {
            var getPromise=$.ajax({
                dataType: "json",
                url: "/statistics/Country/"+name,
            });
            return getPromise;
        },getStatistics: function() {
            var getPromise=$.ajax({
                dataType: "json",
                url: "/statistics/",
            });
            return getPromise;
        }
    };
})();