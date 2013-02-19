function status() {
	var now = new Date(); 
	var day = now.getDay();
	var hour = now.getHours(); 
	var minutes = now.getMinutes();

//dukes	
	switch(day) {
		case 0: if((hour*60 + minutes) >= 930 && hour <22) {
					document.getElementById('dukesopen').style.display = 'block';
				} else {
					document.getElementById('dukesopen').style.display = 'none';
				};
				break;
		case 1:
		case 2:
		case 3:
		case 4: if(hour >= 11 && hour <22 ) {
					document.getElementById('dukesopen').style.display = 'block';
				} else {
					document.getElementById('dukesopen').style.display = 'none';
				};
				break;
		case 5:
		case 6: if(hour >= 11 && hour <21) {
					document.getElementById('dukesopen').style.display = 'block';
				} else {
					document.getElementById('dukesopen').style.display = 'none';
				};
				break;
		default: alert("default");
	}
	
//top dog
	switch(day) {
		case 0: document.getElementById('topdogopen').style.display = 'none';
				break;
		case 1:
		case 2:
		case 3:
		case 4: if((hour*60 + minutes) >= 630 && hour <20) {
					document.getElementById('topdogopen').style.display = 'block';
				} else {
					document.getElementById('topdogopen').style.display = 'none';
				};
				break;
		case 5: if((hour*60 + minutes) >= 630 && (hour*60 + minutes) < 930) {
					document.getElementById('topdogopen').style.display = 'block';
				} else {
					document.getElementById('topdogopen').style.display = 'none';
				};
				break;
		case 6: document.getElementById('topdogopen').style.display = 'none';	
				break;
		default: alert("default");
	}
	
//d hall and ehall
	switch(day) {
		case 0: if(hour >= 10 && hour < 15) { 
					document.getElementById('dhallopen').style.display = 'block';
					document.getElementById('ehallopen').style.display = 'block';
				} else if((hour*60 + minutes) >= 990 && (hour*60 + minutes) < 1170) {
					document.getElementById('dhallopen').style.display = 'block';
					document.getElementById('ehallopen').style.display = 'block';
				} else {
					document.getElementById('dhallopen').style.display = 'none';
					document.getElementById('ehallopen').style.display = 'none';
				};
				break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: if(hour >= 7 && hour < 10) {
					document.getElementById('dhallopen').style.display = 'block';
					document.getElementById('ehallopen').style.display = 'block';
				} else if(hour >= 11 && hour < 14) {
					document.getElementById('dhallopen').style.display = 'block';
					document.getElementById('ehallopen').style.display = 'block';
				} else if((hour*60 + minutes) >= 990 && hour < 20) {
					document.getElementById('dhallopen').style.display = 'block';
					document.getElementById('ehallopen').style.display = 'block';
				} else {
					document.getElementById('dhallopen').style.display = 'none';
					document.getElementById('ehallopen').style.display = 'none';
				};
				break;
		case 6: if(hour >= 10 && hour < 15) {
					document.getElementById('dhallopen').style.display = 'block';
					document.getElementById('ehallopen').style.display = 'block';
				} else if((hour*60 + minutes) >= 990 && (hour*60 + minutes) < 1170) {
					document.getElementById('dhallopen').style.display = 'block';
					document.getElementById('ehallopen').style.display = 'block';
				} else {
					document.getElementById('dhallopen').style.display = 'none';
					document.getElementById('ehallopen').style.display = 'none';
				};
				break;
		default: alert("Error: day not found.");
	}
//market
	switch(day) {
		case 0: document.getElementById('marketopen').style.display = 'none';
			break;
		case 1:
		case 2:
		case 3:
		case 4: if((hour*60 + minutes) >= 450 && hour <21) {
							document.getElementById('marketopen').style.display = 'block';
						} else {
							document.getElementById('marketopen').style.display = 'none';
						};
						break;
		case 5: if((hour*60 + minutes) >= 450 && hour < 14) {
							document.getElementById('marketopen').style.display = 'block';
						} else {
							document.getElementById('marketopen').style.display = 'none';
						};
						break;
		case 6: document.getElementById('marketopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//festival
	switch(day) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: if(hour >= 11 && hour < 20) {
					document.getElementById('festivalopen').style.display = 'block';
				} else {
					document.getElementById('festivalopen').style.display = 'none';
				};
				break;
		case 6: document.getElementById('festivalopen').style.display = 'none';	
				break;
		default: alert("default");
	}
	
//chick-fil-a
	switch(day) {
		case 0: document.getElementById('chickfilaopen').style.display = 'none';
				break;
		case 1: 
		case 2: 
		case 3: 
		case 4: 
		case 5: if((hour*60 + minutes) >= 450 && hour < 21) {
					document.getElementById('chickfilaopen').style.display = 'block';
				} else {
					document.getElementById('chickfilaopen').style.display = 'none';
				};
				break;
		case 6: if(hour >= 11 && hour < 21) {
					document.getElementById('chickfilaopen').style.display = 'block';
				} else {
					document.getElementById('chickfilaopen').style.display = 'none';
				};
				break;
		default: alert("default");
	}
	
//einstein bagles
	switch(day) {
		case 0: if(hour >= 12 && hour < 16) {
					document.getElementById('einsteinopen').style.display = 'block';
				} else {
					document.getElementById('einsteinopen').style.display = 'none';
				}
				break;
		case 1: 
		case 2:
		case 3: 
		case 4: 
		case 5: if((hour*60 + minutes) >= 450 && hour < 15) {
					document.getElementById('einsteinopen').style.display = 'block';
				} else {
					document.getElementById('einsteinopen').style.display = 'none';
				};
				break;
		case 6: document.getElementById('einsteinopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//lets go
		switch(day) {
		case 0: document.getElementById('letsgoopen').style.display = 'none';
				break;
		case 1: 
		case 2:
		case 3: 
		case 4: if((hour*60 + minutes) >= 645 && (hour*60 + minutes) < 930) {
					document.getElementById('letsgoopen').style.display = 'block';
				} else {
					document.getElementById('letsgoopen').style.display = 'none';
				};
				break;
		case 5: if((hour*60 + minutes) >= 645 && hour < 14) {
					document.getElementById('letsgoopen').style.display = 'block';
				} else {
					document.getElementById('letsgoopen').style.display = 'none';
				};
				break;
		case 6: document.getElementById('letsgoopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//quiznos
	switch(day) {
		case 0: if(hour >= 15 && hour < 23) {
					document.getElementById('quiznosopen').style.display = 'block';
				} else {
					document.getElementById('quiznosopen').style.display = 'none';
				};
				break;
		case 1: 
		case 2:
		case 3: 
		case 4: 
		case 5: if(hour >= 10 && hour < 24) {
					document.getElementById('quiznosopen').style.display = 'block';
				} else {
					document.getElementById('quiznosopen').style.display = 'none';
				};
				break;
		case 6: if(hour >= 15 && hour < 23) {
					document.getElementById('quiznosopen').style.display = 'block';
				} else {
					document.getElementById('quiznosopen').style.display = 'none';
				};	
				break;
		default: alert("default");
	}
	
//mrs. green's
	switch(day) {
		case 0: document.getElementById('greensopen').style.display = 'none';
				break;
		case 1: 
		case 2:
		case 3: 
		case 4: if(hour >= 11 && (hour*60 + minutes) < 1170) {
					document.getElementById('greensopen').style.display = 'block';
				} else {
					document.getElementById('greensopen').style.display = 'none';
				}
		case 5: if(hour >= 11 && (hour*60 + minutes) < 870) {
					document.getElementById('greensopen').style.display = 'block';
				} else {
					document.getElementById('greensopen').style.display = 'none';
				};
				break;
		case 6: document.getElementById('greensopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//madison grill
	switch(day) {
		case 0: document.getElementById('madisongrillopen').style.display = 'none';
				break;
		case 1: 
		case 2:
		case 3: 
		case 4:
		case 5: if(hour >= 11 && hour < 14) {
					document.getElementById('madisongrillopen').style.display = 'block';
				} else if(hour >= 17 && (hour*60 + minutes) < 1230){
					document.getElementById('madisongrillopen').style.display = 'block';
				} else {
					document.getElementById('madisongrillopen').style.display = 'none';
				};
				break;
		case 6: document.getElementById('madisongrillopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//mr chips
		switch(day) {
		case 1: 
		case 2:
		case 3: 
		case 4:
		case 5: if((hour*60 + minutes) >= 450 && hour < 24) {
					document.getElementById('chipsopen').style.display = 'block';
				} else {
					document.getElementById('chipsopen').style.display = 'none';
				};
				break;
		case 6: 
		case 0: if(hour >= 11 && hour < 23) {
					document.getElementById('chipsopen').style.display = 'block';
				} else {
					document.getElementById('chipsopen').style.display = 'none';
				};
				break;
		default: alert("default");
	}
	
//red mango
	switch(day) {
		case 0: if(hour >= 17 && hour < 22) {
					document.getElementById('redmangoopen').style.display = 'block';
				} else {
					document.getElementById('redmangoopen').style.display = 'none';
				};
				break;
		case 1: 
		case 2:
		case 3: 
		case 4:
		case 5: if((hour*60 + minutes) >= 510 && hour < 22) {
					document.getElementById('redmangoopen').style.display = 'block';
				} else {
					document.getElementById('redmangoopen').style.display = 'none';
				};
				break;
		case 6: document.getElementById('redmangoopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//pod
		switch(day) {
		case 1: 
		case 2:
		case 3: 
		case 4: if((hour*60 + minutes) >= 450 && (hour*60 + minutes) < 1050) {
					document.getElementById('podopen').style.display = 'block';
				} else {
					document.getElementById('podopen').style.display = 'none';
				};
				break;
		case 5: if((hour*60 + minutes) >= 450 && (hour*60 + minutes) < 930) {
					document.getElementById('podopen').style.display = 'block';
				} else {
					document.getElementById('podopen').style.display = 'none';
				};
				break;
		case 6:
		case 0: document.getElementById('podopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//freshens
	switch(day) {
		case 1: 
		case 2:
		case 3: 
		case 4: if(hour >= 13 && (hour*60 + minutes) < 1350) {
					document.getElementById('freshensopen').style.display = 'block';
				} else {
					document.getElementById('freshensopen').style.display = 'none';
				};
				break;
		case 5: if(hour >= 13 && (hour*60 + minutes) < 1110) {
					document.getElementById('freshensopen').style.display = 'block';
				} else {
					document.getElementById('freshensopen').style.display = 'none';
				};
				break;
		case 6:
		case 0: document.getElementById('freshensopen').style.display = 'none';
				break;
		default: alert("default");
	}
	
//jemmy's corner market
	switch(day) {
		case 1: 
		case 2:
		case 3: 
		case 4: if((hour*60 + minutes) >= 990 && hour < 24)  {
					document.getElementById('jemmysopen').style.display = 'block';
				} else {
					document.getElementById('jemmysopen').style.display = 'none';
				};
				break;
		case 5: if((hour*60 + minutes) >= 990 && hour < 20) {
					document.getElementById('jemmysopen').style.display = 'block';
				} else {
					document.getElementById('jemmysopen').style.display = 'none';
				};
				break;
		case 6:
		case 0: if(hour >=13 && hour < 24) {
					document.getElementById('jemmysopen').style.display = 'block';
				} else {
					document.getElementById('jemmysopen').style.display = 'none';
				};
					break;
		default: alert("default");
	}
	
//starbucks
	switch(day) {
		case 1: 
		case 2:
		case 3: 
		case 4: if((hour*60 + minutes) >= 450 || hour < 1)  {
					document.getElementById('starbucksopen').style.display = 'block';
				} else {
					document.getElementById('starbucksopen').style.display = 'none';
				};
				break;
		case 5: if((hour*60 + minutes) >= 450 && hour < 18) {
					document.getElementById('starbucksopen').style.display = 'block';
				} else {
					document.getElementById('starbucksopen').style.display = 'none';
				};
				break;
		case 6: if(hour >= 12 && hour < 18){
					document.getElementById('starbucksopen').style.display = 'block';
				} else {
					document.getElementById('starbucksopen').style.display = 'none';
				};
				break;
		case 0: if(hour >=13 && hour < 24) {
					document.getElementById('starbucksopen').style.display = 'block';
				} else {
					document.getElementById('starbucksopen').style.display = 'none';
				};
				break;
		default: alert("default");
	}
}