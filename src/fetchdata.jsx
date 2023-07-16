import axios from "axios";

export const fetchdata = async (value) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${value}`)
        return response.data
    }
    catch (error){
        console.log(error);
    }
}
