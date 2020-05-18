import axios from 'axios';


//this function 
export const fetchShow = () => {
    return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then((res) => {
        // console.log(`response`, res)
        return res;
    }) 
    .catch ((err) => {
        console.log(`Error fetching the data from api`, err)        
    })        
    }