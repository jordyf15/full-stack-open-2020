import axios from 'axios';
const baseUrl='/api/persons';

const getAll=()=>{
    return axios.get(baseUrl)
    .then((res)=>{
        return res.data;
    })
}

const create=(newContact)=>{
    return axios.post(baseUrl,newContact)
    .then((res)=>{
        return res.data
    })
}

const update=(updatedContact)=>{
    return axios.put(`${baseUrl}/${updatedContact.id}`,updatedContact)
    .then((res)=>{
        return res.data;
    })
}

const del=(id)=>{
    return axios.delete(`${baseUrl}/${id}`)
}

export default{
    getAll,
    create,
    del,
    update
}