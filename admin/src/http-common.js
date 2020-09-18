import axios from "axios";
export default axios.create({
  baseURL: "https://192.168.8.112:8080/api/",
  headers: {
    "Content-type": "application/json"
  }
});