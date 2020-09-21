// API/TaxiApi.js
import axios from 'axios';
import ApiKey from '../../ApiKey';

export function getDirectionOpenRoute(origin, destination) {
    const url = 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=' + ApiKey.APIKEY_OPENROUTESERVICE + "&start=" + origin + "&end=" + destination;
    return axios.get(url)
        .then((response) => {
            const rep = {
                status: response.status,
                data: response.data
            }
            return rep;
        })
        .catch((error) => {
            const err = {
                status: error.response.status,
                data: error.response.data
            }
            return err;
        })
}

export function getDirection(origin, destination) { //the best direction selon google
    console.log(ApiKey.gapikey);
    const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&units=metric&key=' + ApiKey.gapikey;
    return axios.get(url)
        .then((response) => {
            const rep = {
                status: response.status,
                data: response.data
            }
            console.log(rep);
            return rep;
        })
        .catch((error) => {
            console.log(error.response.status)
            const err = {
                status: error.response.status,
                data: error.response.data
            }
            return err;
        })
}

export function getLocationName(latitude, longitude) { //the best direction selon google
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=' + ApiKey.Api
    return axios.get(url)
        .then((response) => {

            const rep = {
                status: response.status,
                data: response.data
            }
            return rep;
        })
        .catch((error) => {
            console.log(error.response.status)
            const err = {
                status: error.response.status,
                data: error.response.data
            }
            return err;
        })
}