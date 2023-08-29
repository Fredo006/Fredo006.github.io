////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASSES
class Wilayah {

    provinsi;
    area;
    longitude;
    latitude;
    arrayOfForecast = [];

    constructor(provinsi, area, longitude, latitude, arrayOfForecast){
        this.provinsi = provinsi
        this.area = area;
        this.longitude = longitude;
        this.latitude = latitude;
        this.arrayOfForecast = arrayOfForecast;
    }
}


class Forecast {

    tipePerkiraan;
    tipeWaktuPerkiraan;
    arrayOfTimeRange = [];

    constructor(tipePerkiraan, tipeWaktuPerkiraan, arrayOfTimeRange){
        this.tipePerkiraan = tipePerkiraan;
        this.tipeWaktuPerkiraan = tipeWaktuPerkiraan;
        this.arrayOfTimeRange = arrayOfTimeRange;
    }
}


class TimeRange {

    waktu;
    value;

    constructor(waktu, value){
        this.waktu = waktu;
        this.value = value;
    }
}