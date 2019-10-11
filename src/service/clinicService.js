import { async } from "q";
import {getVariablePathString,getFilters,getZipcode} from "../utils/utils"

export const getClinics = async()=>{
    const url = process.env.REACT_APP_API_SERVER + 'clinics'
    const response = await fetch(url)
    const res = await response.json()
    return res
}

export const getCategories = async() => {
    const url = process.env.REACT_APP_API_SERVER + 'searchCategory'
    const response = await fetch(url)
    console.log("categories : ", response)
    const res = await response.json()
    return res
}

export const getFilteredClinics = async() => {
    let path = "find/clinics?"
    let categoryList = getFilters()
    let filters = categoryList?categoryList:[]
    let zipcode = getZipcode()
    if(filters.lenght > 0 && zipcode == null){
        categoryList.forEach(category => {
            path += "&searchCategories="+category//getVariablePathString(isFirst,"searchCategories", category)
        });
    }else if(filters.length == 0 && zipcode != null){
            path+="&zipcode="+zipcode//getVariablePathString(isFirst,"zipcode",zipcode)
    }else{
        filters.forEach(category => {
            path += "&searchCategories="+category//getVariablePathString(isFirst,"searchCategories", category)
        });
        path+="&zipcode="+zipcode//getVariablePathString(isFirst,"zipcode",zipcode)
    }
    
    console.log("Searching Path : " + path)
    const url = process.env.REACT_APP_API_SERVER + path
    const response = await fetch(url)
    const res = await response.json()
    console.log("total clinic search: " + res.length)
    return res
}