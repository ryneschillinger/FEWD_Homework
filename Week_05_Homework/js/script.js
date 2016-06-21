// 1) User types city name in input field
// 2) User hits submit button
// 3) Convert city name to lowercase for control
// 4) Check if city name matches one of our cities
// 5) If so, change backgorund image to match entry
// 6) If city = "new york" or "new york city" or "nyc" change background image to nyc.jpg
// 7) If city = "austin" or "atx" change background image to austin.jpg
// 8) If city = "los angeles" or "la" or "lax" change background image to austin.jpg
// 9) If city = "san francisco" "or "sf" or "bay area" change background image to austin.jpg
// 10) If city = "sydney" or "syd" change background iamge to sydney.jpg
// 11) If entry doesn't match any of our cities, do nothing. Maybe program a sarcastic response if you have time.

$(document).ready(function(){

	$("form").submit(function(e){
		e.preventDefault();
		
		var entry = $("#city-type").val();
		var lowercase = entry.toLowerCase();
		var city = lowercase.replace(/(^\s+|\s+$)/g,'');
		
		if (city === "new york city" || city === "new york" || city === "nyc"){
			document.body.style.backgroundImage = "url('images/nyc.jpg')"; 
		} else if (city === "austin" || city === "atx"){
			document.body.style.backgroundImage = "url('images/austin.jpg')"; 
		} else if (city === "los angeles" || city === "la" || city === "lax"){
			document.body.style.backgroundImage = "url('images/la.jpg')"; 
		} else if (city === "san francisco" || city === "sf" || "bay area"){
			document.body.style.backgroundImage = "url('images/sf.jpg')"; 
		} else if (city === "sydney" || city === "syd"){
			document.body.style.backgroundImage = "url('images/sydney.jpg')"; 
		} else {
		}

		$("#city-type").val("");
	})
})