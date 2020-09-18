import { API_BASE_URL, ACCESS_TOKEN } from '../constants/Auth2Constant';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export function getCurrentUser(token) {
    return RNFetchBlob.config({
        trusty: true
    })
        .fetch('GET', 'https://192.168.8.112:8080/user/me', {
            Authorization: 'Bearer ' + token,
        })
        .then((response) => {
            const rep = {
                status: response.status,
                data: JSON.parse(response.data)
            }
            return rep;
        }).catch((error) => {
            if (error.response) {

                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log("error.response");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log("error.message");
                console.log('Error', error.message);
            }
        });

}

export function getCurrentUserByEtuID(id,etuid) {
    var url = "https://192.168.8.112:8080/api/user/etuid/"+id+"/"+etuid;
    return RNFetchBlob.config({
        trusty: true
    })
        .fetch('GET', url)
        .then((response) => {
            const rep = {
                status: response.status,
                data: JSON.parse(response.data)
            }
            return rep;
        }).catch((error) => {
            if (error.response) {

                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log("error.response");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log("error.message");
                console.log('Error', error.message);
            }
        });

}


