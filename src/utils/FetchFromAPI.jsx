import axios from 'axios'



const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
    params: { 
      maxResults: '50'
    },
    headers: {
      // 'X-RapidAPI-Key':   ,
      // 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      'X-RapidAPI-Key':import.meta.env.VITE_API_KEY || import.meta.env.VITE_API2_KEY ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
console.log()
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  
    return data;
}
  