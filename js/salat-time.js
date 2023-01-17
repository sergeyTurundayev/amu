$( document ).ready(function() {

	if( $('.salat-title').data('city') ) {

		var now = new Date();

		var nowDate = now.getDate();

		salatCity = $('.salat-title').data('city');
		salatCountry = $('.salat-title').data('country');

		document.cookie = "city=" + salatCity;
		document.cookie = "country=" + salatCountry;

		document.cookie = "cityEn=" + salatCity;

		var translateUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=uk&dt=t&q=city+" + encodeURI(salatCity);


		$.ajax({
			url: translateUrl,
			type: 'GET',
			cache: false,
			isLocal: true,
			success: function( result ) {
				result = result[0][0][0];
				result = result.slice(6);

				if( result ){
					// result = result.charAt(0).toUpperCase() + result.substr(1);
					$('.salat-title span').text( "Час молитов для м. " + result );

					document.cookie = "city=" + result;
				}
			},
			error: function(jqXHR, exception) {
				console.log( 'error' );  
			}
		});

		// var timeUrl = "http://api.aladhan.com/v1/calendarByAddress?address=" + salatCity + "&method=2";
		var timeUrl = "https://api.aladhan.com/v1/calendarByCity?city=" + encodeURI(salatCity)  + "&country=" + encodeURI(salatCountry)  + "&method=2";

		$.ajax({
			url: timeUrl,
			type: 'GET',
			cache: false,
			isLocal: true,
			success: function( result ) {
				var timeJsonObj = result['data'][nowDate - 1]['timings'];

				var timeArr = [ timeJsonObj["Fajr"],
				timeJsonObj["Sunrise"],
				timeJsonObj["Dhuhr"],
				timeJsonObj["Asr"],
				timeJsonObj["Maghrib"],
				timeJsonObj["Isha"] ];

				$.each( timeArr, function( i, val ) {
					timeArr[i] = val.slice(0,5);
					$('.salat-list li:nth-child(' + (i + 1)+ ') .salat-time').text( val.slice(0,5) );
				});

				document.cookie = "fajr=" + timeArr[0];
				document.cookie = "sunrise=" + timeArr[1];
				document.cookie = "dhuhr=" + timeArr[2];
				document.cookie = "asr=" + timeArr[3];
				document.cookie = "maghrib=" + timeArr[4];
				document.cookie = "isha= " + timeArr[5];
			},
			error: function(jqXHR, exception) {
				console.log( 'error' );  
			}
		});
	}
});