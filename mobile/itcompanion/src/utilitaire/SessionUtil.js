import { API_BASE_URL, USER } from '../constants/Auth2Constant';
import AsyncStorage from '@react-native-community/async-storage';

export async function setUser(currentUser) {
    try {

        const usrStorage = JSON.stringify(currentUser);
        console.log(usrStorage);
        await AsyncStorage.setItem(USER, usrStorage);
    } catch (e) {
        console.log(e);
    }

}

export async function getUser() {
    try{
       let user = await AsyncStorage.getItem(USER);

       return JSON.parse(user);
    }catch(e){
        console.log(e);
    }
    // return AsyncStorage.getItem(USER)
    //     .then((currentUser) => {
    //         console.log(currentUser);
    //         // console.log(typeof currentUser);
    //         const rep = JSON.parse(currentUser);
    //         //console.log(typeof rep);
    //         console.log("efa mivoaka aloha ny rep ID" + rep.id);
    //         return currentUser;
    //     }).catch((error) => {
    //         console.log(error);
    //     });

}

export function logOut() {
    AsyncStorage.clear();
}