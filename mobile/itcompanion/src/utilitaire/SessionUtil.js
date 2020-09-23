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
    

}

export function logOut() {
    console.log("makato");
     AsyncStorage.clear();
}