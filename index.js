const readline = require('readline-sync')

function start(){

	const bestTravelRoute = {}
	
	bestTravelRoute.OriginCity = askOriginCity()
	bestTravelRoute.DestinyCity = askDestinyCity();
	bestTravelRoute.DateToTravel = askDateToTravel();
	bestTravelRoute.MotivationToTravel = askMotivationToTravel();
	
	function askOriginCity(){
		return readline.question('What\'s your origin city?')
	}

	function askDestinyCity(){
		return readline.question('What\'s your destiny city?')
	}

	function askDateToTravel(){
		return readline.question('What\'s your date to travel?')
	}

	function askMotivationToTravel(){
		return readline.question('What\'re the most important things in you travel?')
	}


	console.log(bestTravelRoute);


}

start()
