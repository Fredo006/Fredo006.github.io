const parser = new DOMParser();
let body = document.querySelector('body');
body.style.backgroundColor = 'black';
body.style.color = 'white';

// Function to fetch/get weather information by the location from the URL parameter
function fetchDataCuaca(lokasi){
    fetch(daftarWilayah[lokasi]).then(res => {
        return res.text();
    }).then(data => {
        xmlData = parser.parseFromString(data, "text/xml");
        jsonData = xmlToJson(xmlData);
    
        let wilayah = constructArrayOfWilayah(jsonData.data.forecast.area);
        // console.log(wilayah);
        let arrayJson = [];

        arrayJson.push(
            {"author": "Fredo Ronan"}
        );
    
        wilayah.forEach(data => {
            arrayJson.push({
                Provinsi: data.provinsi,
                Wilayah: data.area,
                Longitude: data.longitude,
                Latitude: data.latitude,
                Coordinat: data.latitude + " " + data.longitude,
                Forecast: data.arrayOfForecast
            });
        })
    
        // console.log(JSON.stringify(arrayJson, null, 4));
    
        let json_data = document.getElementById('json-data');
    
        json_data.innerText = JSON.stringify(arrayJson, null, 4);
    
        let preTag = document.createElement('pre');
    
        preTag.innerHTML = json_data.innerText;
        
        body.appendChild(preTag);
    });
}


// Function to get the available location that can be requested through URL parameter
function fetchDataLokasi(){
    let daftarAreaWilayah = Object.keys(daftarWilayah);

    let preTag = document.createElement('pre');
    preTag.innerHTML = JSON.stringify(daftarAreaWilayah, null, 4);

    body.appendChild(preTag);
}


// Function to find is the location requested from parameter is available or not
// return string if success
// return Exception if not success or not a valid parameter
function findLokasi(query){
    let daftarAreaWilayah = Object.keys(daftarWilayah);
    let regex = /^[a-zA-Z][a-z]*([A-Z][a-z]*)*$/;

    let wilayahKetemu;
    let isFound = false;

    if(regex.test(query)){
        daftarAreaWilayah.forEach(dataWilayah => {
            if(dataWilayah.toLowerCase() === query.toLowerCase()){
                wilayahKetemu = dataWilayah;
                isFound = true;
            }
        });

        if(!isFound){
            throw new Error("lokasi tidak tersedia");
        }
    } else {
        throw new Error("error URL parameter");
    }

    return wilayahKetemu;
}


// Parsing URL parameters
let params = getQueryParams();
let query = params["query"];

if(query.includes('listLocation')){
    fetchDataLokasi();
} else if (query.includes('help')) {
    let preHelpTag = document.createElement('pre');
    preHelpTag.innerHTML = `
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GUIDE TO USE THIS API<br><br>
        &nbsp; 1. Use query='location' parameter to fetch data by certain location<br>
        &nbsp;      For example:<br> 
        &nbsp;      'https://fredo006.github.io/API/CuacaBMKGAPI/api_bmkg_cuaca.html?query=jogja' <===== this will show the weather forecast for location Yogyakarta/Jogja<br><br>
        &nbsp; 2. Use query='listLocation' to see what are the available location<br>
        &nbsp;      For example:<br>
        &nbsp;      'https://fredo006.github.io/API/CuacaBMKGAPI/api_bmkg_cuaca.html?query=listLocation'
    `

    preHelpTag.style.fontSize = '1rem';

    body.appendChild(preHelpTag);
} else {
    try {
        resultQueryLokasi = findLokasi(query);
        // console.log(resultQueryLokasi);
    
        fetchDataCuaca(resultQueryLokasi);
    
    }catch(error){
        console.log(error);

        let errorResponse = {
            "author": "Fredo Ronan",
            "response": error.message
        };
    
        let preTagError = document.createElement('pre');
        preTagError.innerHTML = JSON.stringify(errorResponse, null, 4);
        body.appendChild(preTagError);
    }
}

