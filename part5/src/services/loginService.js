import axios from 'axios';
const baseUrl='/api/login'

const login=async(credentials)=>{
    try{
    const result=await axios.post(baseUrl,credentials)
    return result.data;
    }
    catch(err){
        return null
    }
}

export default {login}
