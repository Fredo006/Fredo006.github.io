////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN SEVERAL FUNCTIONS TO CONSTRUCT THE DATA INTO OBJECT FROM CLASS
// Construct timerange forecast (return arrayOfTimeRange)
function constructArrayOfTimeRange(dataWaktu, tipeWaktu){
    
    let arrayOfTimeRange = [];
    let waktu;
    let jsonTimeRange = {};

    for(let i = 0; i<dataWaktu.length; i++){

        if(tipeWaktu == 'hourly'){
            // (perkiraan per jam) maka ambil attribute h
            waktu = dataWaktu[i].attributes.h;
        } else if(tipeWaktu == 'daily') {
            // {perkiraan per hari} maka ambil attribute day
            waktu = dataWaktu[i].attributes.day;
        }

        arrayOfTimeRange.push(
            new TimeRange(
                waktu,
                dataWaktu[i].value
            )
        )
    }

    arrayOfTimeRange.forEach(time => {
        jsonTimeRange["TimeRange"] = time;
    })

    return arrayOfTimeRange;
}


// Construct array of forecast type
function constructArrayOfForecast(dataForecast){
    let arrayOfForecast = [];
    let jsonForecast = {};

    for(let i = 0; i<dataForecast.length; i++){
        arrayOfForecast.push(
            new Forecast(dataForecast[i].attributes.description, dataForecast[i].attributes.type, constructArrayOfTimeRange(dataForecast[i].timerange, dataForecast[i].attributes.type))
        )
    }

    arrayOfForecast.forEach(dataForecast => {
        jsonForecast["Forecast"] = dataForecast;
    })

    return arrayOfForecast;
}



// Construct array of area wilayah
function constructArrayOfWilayah(area){
    let arrayOfWilayah = [];
    let forecastParameters;
    let checkLengthParameter;
    let isHasForecastParameters;

    let jsonWilayah = {};

    for(let i = 0; i<area.length; i++){

        try {
            checkLengthParameter = area[i].parameter.length;
            forecastParameters = constructArrayOfForecast(area[i].parameter);
        }catch(error){
            forecastParameters = 'NULL';
        }

        arrayOfWilayah.push(
            new Wilayah(
                area[i].attributes.domain,
                area[i].attributes.description,
                area[i].attributes.longitude,
                area[i].attributes.latitude,
                forecastParameters
            )
        )
    }

    let i = 0;

    arrayOfWilayah.forEach(dataArea => {
        jsonWilayah["Area"] = dataArea;
    });

    return arrayOfWilayah;
}