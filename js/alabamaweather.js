const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4049979&units=imperial&APPID=ac4a7c570cce008087083e285058e1e6";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
         
       
     document.getElementById('currentCondition').textContent = jsObject.weather[0].description;
     document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
     document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(1);
     document.getElementById('humidity').textContent = jsObject.main.humidity;
    

     function windChill() {
       var temp = parseInt(document.getElementById("current-temp").innerText);
       var speed = parseInt(document.getElementById("windspeed").innerText);
       var result = calculatechill(temp, speed);

       if ((temp <= 50) && (speed >= 3.0)) {
         document.getElementById("chill").innerText = result.toFixed() + " °F";
       } else {
         document.getElementById("chill").innerText = "N/A";
       }
     }

     function calculatechill(temp, speed) {
       var calculatechill = (35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp *(speed**0.16)));
       return calculatechill;
     }
     windChill();

    });     

    const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=4076795&units=imperial&APPID=ac4a7c570cce008087083e285058e1e6";

    fetch(apiURL2)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
             
           
         document.getElementById('currentCondition1').textContent = jsObject.weather[0].description;
         document.getElementById('current-temp1').textContent = jsObject.main.temp.toFixed(0);
         document.getElementById('windspeed1').textContent = jsObject.wind.speed.toFixed(1);
         document.getElementById('humidity1').textContent = jsObject.main.humidity;
        
    
         function windChill() {
           var temp = parseInt(document.getElementById("current-temp1").innerText);
           var speed = parseInt(document.getElementById("windspeed1").innerText);
           var result = calculatechill(temp, speed);
    
           if ((temp <= 50) && (speed >= 3.0)) {
             document.getElementById("chill1").innerText = result.toFixed() + " °F";
           } else {
             document.getElementById("chill1").innerText = "N/A";
           }
         }
    
         function calculatechill(temp, speed) {
           var calculatechill = (35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp *(speed**0.16)));
           return calculatechill;
         }
         windChill();
    
        });

        const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=4068590&units=imperial&APPID=ac4a7c570cce008087083e285058e1e6";

        fetch(apiURL3)
            .then((response) => response.json())
            .then((jsObject) => {
                console.log(jsObject);
                 
               
             document.getElementById('currentCondition2').textContent = jsObject.weather[0].description;
             document.getElementById('current-temp2').textContent = jsObject.main.temp.toFixed(0);
             document.getElementById('windspeed2').textContent = jsObject.wind.speed.toFixed(1);
             document.getElementById('humidity2').textContent = jsObject.main.humidity;
            
        
             function windChill() {
               var temp = parseInt(document.getElementById("current-temp2").innerText);
               var speed = parseInt(document.getElementById("windspeed2").innerText);
               var result = calculatechill(temp, speed);
        
               if ((temp <= 50) && (speed >= 3.0)) {
                 document.getElementById("chill2").innerText = result.toFixed() + " °F";
               } else {
                 document.getElementById("chill2").innerText = "N/A";
               }
             }
        
             function calculatechill(temp, speed) {
               var calculatechill = (35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp *(speed**0.16)));
               return calculatechill;
             }
             windChill();
        
            });