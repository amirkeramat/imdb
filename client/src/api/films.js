import axios from 'axios'


export default function getData(url){
   return axios.get(url)
}

Promise.all(getData("https://imdb-api.com/en/API/Top250Movies/k_9io7i122")).then(res=>console.log(res))

