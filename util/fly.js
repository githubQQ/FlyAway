/**
 * User: ngjaying
 * Date: 13-5-18
 * Time: 下午3:45
 */
ngjaying.fly = {
    /**
     * Constants
     */
    STRFROM: '%from%',
    STRTO: '%to%',
    STRDATE: '%date%', //The date format is yyyy-MM-dd
    /**
     * All supported air ticket booking sites
     * Each element contains a name, and a url with parameters to be replaced
     */
    flySites: [
        {name: 'qunar', url: 'http://flight.qunar.com/site/oneway_list.htm?searchDepartureAirport=%from%&searchArrivalAirport=%to%&searchDepartureTime=%date%'},
        {name: 'kuxun', url: 'http://jipiao.kuxun.cn/%from%-%to%.html?%date%'},
        {name: 'taobao', url: 'http://s.jipiao.trip.taobao.com/flight_search_result.htm?isAt=true#tripType=0&depCityName=%from%&arrCityName=%to%&depDate=%date%'}
    ],
    /*sendReq : function(){
     var req = new XMLHttpRequest();
     req.open('GET', this.searchOnFlickr_, true);
     req.onload = this.showContent_.bind(this);
     req.send(null);
     },
     showContent : function(e){
     alert(e.target.responseXML);
     }*/
    /**
     * Get the real url of a site
     * @flySite, object a flysite in flySites
     * @from, string the departure airport
     * @to, string the destiny airport
     * @date, string, the date to depart
     */
    getUrl: function (flySite, from, to, date) {
        if (flySite.name == 'qunar' || flySite.name == 'taobao') {
            from = encodeURIComponent(from);
            to = encodeURIComponent(to);
        } else if (flySite.name == 'kuxun') {
            from = CC2PY(from);
            to = CC2PY(to);
        }
        return flySite.url.replace(/%from%/g, from).replace(/%to%/g, to).replace(/%date%/g, date);
    }
};