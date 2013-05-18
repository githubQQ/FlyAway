/**
 * User: ngjaying
 * Date: 13-5-12
 * Time: 下午6:43
 */
onload = function () {
    var $ = function (sel) {
        return document.querySelector(sel);
    };
    $('#searchBtn').addEventListener('click', function () {
        console.log('click event');
        var from = $('#fromDest').value;
        var to = $('#toDest').value;
        var date = $('#flyTime').value;
        console.log(from + ', ' + to + ', ' + date);
        var length = ngjaying.fly.flySites.length;
        for (var i = 0; i < length; i++) {
            var flySite = ngjaying.fly.flySites[i];
            var url = ngjaying.fly.getUrl(flySite, from, to, date);
            console.log(url);
            $('#' + flySite.name + 'View').src = url;
        }
    });
};
