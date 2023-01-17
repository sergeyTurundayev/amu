class PrayerTime {
  constructor(country = 'Ukraine', city = 'Kiev', cityUa = 'Київ', prayerTimeCookie = '{"date":"01:23","fajr":"00:01","sunrise":"00:02","dhuhr":"00:03","asr":"00:04","maghrib":"00:00","isha":"00:06"}') {
    this.country = country;
    this.city = city;
    this.cityUa = cityUa;
    this.prayerTimeCookie = prayerTimeCookie;
  } // constructor

  translateCity(text) {

    let translateUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=uk&dt=t&q=city+" + encodeURI(text);
    
    $.ajax({
      url: translateUrl,
      type: 'GET',
      async: false,
      cache: false,
      isLocal: true,
      success: function( result ) {
        result = result[0][0][0];
        this.cityUa = result.replace('місто ', '');
        // setCookie('city_ua', this.cityUa, { secure: true, "max-age": 600 });
      }
    });

    return this.cityUa;
  } // translateCity

  getPrayerTime(county = 'Ukraine', city = 'Kiev') {

    let timeUrl = "https://api.aladhan.com/v1/calendarByCity?city=" + encodeURI(city)  + "&country=" + encodeURI(county)  + "&method=2";
  
    $.ajax({
      url: timeUrl,
      type: 'GET',
      async: false,
      cache: false,
      isLocal: true,
      success: function( result ) {
  
        const now = new Date();
        const nowDate = now.getDate();
  
        var timeJsonObj = result['data'][nowDate - 1]['timings'];
  
        let timeObj = {};
  
        timeObj.fajr = timeJsonObj["Fajr"];
        timeObj.sunrise = timeJsonObj["Sunrise"];
        timeObj.dhuhr = timeJsonObj["Dhuhr"];
        timeObj.asr = timeJsonObj["Asr"];
        timeObj.maghrib = timeJsonObj["Maghrib"];
        timeObj.isha = timeJsonObj["Isha"];
  
        let timeJsonStr = JSON.stringify(timeObj);
  
        console.log(timeJsonStr);
  
        // return timeJsonStr;
      },
      error: function(jqXHR, exception) {
        console.log( 'error' );  
      }
    });
  }

  getCountyCity() {
  
    let city = 'Kiev';
    let countryName = 'Ukraine';
    let countryCityCookie = '';
  
    $.ajax({
      url: "https://ipapi.co/json/",
      type: "GET",
      async: false,
      success: function (response) {
  
        city = response.city;
        countryName = response.country_name;
  
        countryCityCookie = countryName + '/' + city;
  
        // setCookie("country_city", 'countryCityCookie', { secure: true, "max-age": 600 });
      },
      error: function() {
        city = 'Kiev';
        countryName = 'Ukraine';
      },
    });
  
    return countryCityCookie;
  
  }
}; // PrayerTime