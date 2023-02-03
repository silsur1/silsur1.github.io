// fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58")
// .then(res => {
     
//     if (res.ok){
//         console.log("SUCCESS")
//     } else {
//         console.log("FAILURE")
//     }
//     res.json()
// })

// .then(data => console.log(data))    
// .catch(error => console.log("ERROR"))'
function askWeather(){
    fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.715948&lon=10.867377")
    .then(res => {
        if (!res.ok) {
            throw new Error("FAILURE: response not okay");
        }
        return res.json();
    })
    .then(data => {
        const weatherData = data;
        console.log(weatherData);
        for(let i = 0; i <= 5; i++){       
            document.getElementById("tabelldata").innerHTML+="<tr><td>lufttrykket dag " + i + " er: " + weatherData.properties.timeseries[i].data.instant.details.air_pressure_at_sea_level + "</td><td>"+"lufttemperatur dag " + i + " er: " +weatherData.properties.timeseries[i].data.instant.details.air_temperature+"</td>"+ "<td>"+"lufthastigheten dag " + i + " er: " +weatherData.properties.timeseries[i].data.instant.details.wind_speed+"</td>" + '<td> <img src="images/png/'+weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code+'.png" alt="'+weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code+'"/></td> </tr>';
            
        }

    })
    .catch(error => console.error("ERROR: " + error.message));
    }