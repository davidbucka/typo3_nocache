(function() {
    var getParams = window.location.search;
    var substring = "no_cache=1";
    if (getParams.indexOf(substring) === -1) {
        if (getParams.length > 0) {
            var addParams = "&no_cache=1";
        } else {
            addParams = "?no_cache=1";
        }
        window.location.href = window.location.href + addParams;
    } else if (getParams.indexOf(substring) === 1) {
        window.location = window.location;
    }
})();
