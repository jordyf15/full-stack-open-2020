import axios from 'axios'
const baseUrl = '/api/blogs'

let token=null;

const setToken=(newToken)=>{
  token=`bearer ${newToken}`
}
const getAll = ()=>{
  const request = axios.get(baseUrl)
  return request.then(response=>response.data)
}

const create=async (blogInfo)=>{
  const config={
    headers: {Authorization: token}
  }
  const request=await axios.post(baseUrl,blogInfo,config)
  return request.data;
}

const update=async(blogId)=>{
  const request=await axios.put(`${baseUrl}/${blogId}`);
  return request.data;
}
const deleteBlog=async(blogId)=>{
  const config={
    headers: {Authorization: token}
  }
  const request=await axios.delete(`${baseUrl}/${blogId}`,config)
  return request.data
}

export default { getAll,create,setToken,update,deleteBlog }