import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//Upload Video
export const uploadVideos = async (body)=>{
    //call post http request to http://localhost:4000/videos to add video in json server return
    //response to Add component

    return await commonAPI("POST", `${serverURL}/videos` ,body)
}
//get all Video
export const getAllvideos = async ()=>{
//call get http request to http://localhost:4000/videos to


    return await commonAPI("GET", `${serverURL}/videos` ,"")
}
//get a single video
export const getAVideo = async (id)=>{

    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")

}
//delete a single video
export const deleteAVideo = async (id)=>{
    
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// adding watch history to json server
 export const addHistroy = async (videoHistory)=>{
    
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
    

 }

// getiing watch history from json server
 export const getHistroy = async ()=>{

    return await commonAPI("GET",`${serverURL}/history`,"")

 }

 // add category to Json server

 export const saveCategory = async (body)=>{

    return await commonAPI("POST",`${serverURL}/categories`,body)

 }
// to get all saved Category names
 export const getSavedCategory = async ()=>{

    return await commonAPI("GET",`${serverURL}/categories`,"")
    
 }
// detele selected category

export const deleteSavedCategory = async (id)=>{

    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
    
 }

