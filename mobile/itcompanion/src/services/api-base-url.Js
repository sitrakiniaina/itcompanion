import axios from "axios";
import { API_BASE_URL,GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants/Auth2Constant'; 
export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});