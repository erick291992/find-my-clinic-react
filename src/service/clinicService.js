import { async } from "q";
import {getFilters,getZipcode} from "../utils/utils"
import {urls} from "../utils/constants"

export const getClinics = async()=>{
    const response = await fetch(urls.CLINICS)
    const res = await response.json()
    return res
}

export const getCategories = async() => {
    const response = await fetch(urls.SEARCH_CATEGORIES)
    const res = await response.json()
    return res
}

export const getFilteredClinics = async() => {
    let path =`${urls.CLINICS_FILTERED}?`
    let categoryList = getFilters()
    let filters = categoryList?categoryList:[]
    let zipcode = getZipcode()
    if(filters.lenght > 0 && zipcode == null){
        categoryList.forEach(category => {
            path += `&searchCategories=${category}`
        });
    }else if(filters.length == 0 && zipcode != null){
            path+=`&zipcode=${zipcode}`
    }else{
        filters.forEach(category => {
            path += `&searchCategories=${category}`
        });
        path+=`&zipcode=${zipcode}`
    }
    
    const url = path
    console.log("PATH : " + url)
    const response = await fetch(url)
    const res = await response.json()
    return res
}