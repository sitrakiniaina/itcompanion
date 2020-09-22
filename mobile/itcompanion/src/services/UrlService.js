import axios from 'axios';
export function getUrlData(url) {
    
    const token = "EAAExH7WgYiYBAP0TxTwoXgv2g22V02ZAfD3IYDsLE3ovLZAwxXFd5H9UqH1xIHxHsFBHtGdvv6kInRGwFRqk22DNoHz4BPG5TBpFEwKN2tJvhcZCZCKYCVq6GnH9i3PeENDmZA5kg27adZAlXrqqCZApQuZAzHC5qVDZCvsj00ar61RviJZCJyuOzcYPh5cj4meu37YQYeeLAl1wZDZD";
    const uri = "https://graph.facebook.com/v2.12?id=" + url + "&scrape=true&access_token=" + token;
    return axios.post(uri)
        .then((response) => {
            console.log("data");
            console.log(response.data);
            return response.data;
        }).catch((error)=>{
            console.log("error");
            console.log(error);
        });

}


