  // let prayerTime = new PrayerTime();

  // console.log(prayerTime.translateCity('Kiev'));
  // console.log(prayerTime.getPrayerTime('Ukraine', 'Kiev'));
  // console.log(prayerTime.getCountyCity());
  
// setPrayerTime();

// // translateCity
// // function translateCity(text) {

// //   let translateUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=uk&dt=t&q=city+" + encodeURI(text);
  
// //   $.ajax({
// //     url: translateUrl,
// //     type: 'GET',
// //     async: false,
// //     cache: false,
// //     isLocal: true,
// //     success: function( result ) {
// //       result = result[0][0][0];

// //       let cityUa = result.replace('місто ', '');
// //       setCookie('city_ua', cityUa, { secure: true, "max-age": 600 });

// //       return cityUa;
// //     },
// //     error: function(jqXHR, exception) {
// //       return 'error';  
// //     }
// //   });
// // }

// // getCountyCity
// function getCountyCity() {
    
//   let city = 'Kiev';
//   let countryName = 'Ukraine';

//   $.ajax({
//     url: "https://ipapi.co/json/",
//     type: "GET",
//     async: false,
//     success: function (response) {

//       city = response.city;
//       countryName = response.country_name;

//       countryCityCookie = countryName + '/' + city;

//       setCookie("country_city", 'countryCityCookie', { secure: true, "max-age": 600 });
//     },
//     error: function() {
//       city = 'Kiev';
//       countryName = 'Ukraine';
//     },
//   });

//   return countryName + '/' + city;

// }

// function setPrayerTimeSpan(timeJsonStr) {
  
//   let timeJson = JSON.parse(timeJsonStr);

//   for (const key in timeJson) {

//     if(key == 'date'){
//       continue;
//     }

//     let textTime = timeJson[key];
//     $('.prayer-time-container span[data-name="' + key + '"]').text(textTime);
//   }
// }

// function getPrayerTime(county = 'Ukraine', city = 'Kiev') {

//   let timeUrl = "https://api.aladhan.com/v1/calendarByCity?city=" + encodeURI(city)  + "&country=" + encodeURI(county)  + "&method=2";

//   $.ajax({
//     url: timeUrl,
//     type: 'GET',
//     async: false,
//     cache: false,
//     isLocal: true,
//     success: function( result ) {

//       const now = new Date();
//       const nowDate = now.getDate();

//       var timeJsonObj = result['data'][nowDate - 1]['timings'];

//       let timeObj = {};

//       timeObj.fajr = timeJsonObj["Fajr"];
//       timeObj.sunrise = timeJsonObj["Sunrise"];
//       timeObj.dhuhr = timeJsonObj["Dhuhr"];
//       timeObj.asr = timeJsonObj["Asr"];
//       timeObj.maghrib = timeJsonObj["Maghrib"];
//       timeObj.isha = timeJsonObj["Isha"];

//       let timeJsonStr = JSON.stringify(timeObj);

//       // .replace(' (EET)', '');

//       console.log(timeJsonStr);

//       return timeJsonStr;

//       // for (const key in timeArr) {
//       //   // console.log(timeArr[key]);

//       //   let textTime = timeArr[key];
//       //   textTime = textTime.replace(' (EET)', '');

//       //   $('.prayer-time-container span[data-name="' + key + '"]').text(textTime);

//       // }

//       // $.each( timeArr, function( i, val ) {
//       //   timeArr[i] = val.slice(0,5);
//       //   $('.salat-list li:nth-child(' + (i + 1)+ ') .salat-time').text( val.slice(0,5) );
//       // });

//       // document.cookie = "fajr=" + timeArr[0];
//       // document.cookie = "sunrise=" + timeArr[1];
//       // document.cookie = "dhuhr=" + timeArr[2];
//       // document.cookie = "asr=" + timeArr[3];
//       // document.cookie = "maghrib=" + timeArr[4];
//       // document.cookie = "isha= " + timeArr[5];
//     },
//     error: function(jqXHR, exception) {
//       console.log( 'error' );  
//     }
//   });

// }

// // setPrayerTime
//   function setPrayerTime() {

//     // let countryCity = getCookie("country_city"); // Kiev/Ukraine

//     // if(!countryCity){
//     //   countryCity = getCountyCity();
//     // }

//     // let countryCityArr = countryCity.split('/');
//     // let salatCountry = countryCityArr[0];
//     // let salatCity = countryCityArr[1];

//     // //
//     // let salatCityUa = getCookie("city_ua");

//     // if(!salatCityUa){
//     //   salatCityUa = translateCity(salatCity);
//     // } else{
//     //   $('.prayer-time-city').text(salatCityUa);
//     // }

//     // // 

    
//   // 

//     // console.log(timeJsonStr);

//     // let prayerTime = getCookie("prayer_time");

//     // if(!prayerTime){

//     //   let salatCountry = 'Ukraine';
//     //   let salatCity = 'Kiev';

//     //   timeJsonStr = getPrayerTime(salatCountry, salatCity);
//     // }else{
//     //   // let prayerTimeCookie = JSON.parse(prayerTime);
//     // }

//     // let timeJsonStr = '{"date":"01:23","fajr":"00:01","sunrise":"00:02","dhuhr":"00:03","asr":"00:04","maghrib":"00:00","isha":"00:06"}';

//     // setPrayerTimeSpan(timeJsonStr);

//   }