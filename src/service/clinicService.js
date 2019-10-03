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
    const res = await response.json()
    return res
}

export const getFilteredClinics = async() => {
    let path = "find/clinics"
    let isFirst = true
    let zipcode = getZipcode()
    let categoryList =getFilters()
    if(categoryList!=null){
        if(zipcode != null){
        
            categoryList.forEach(category => {
                path += getVariablePathString(isFirst,"searchCategories", category)
                isFirst = false
            });
            path+=getVariablePathString(isFirst,"zipcode",zipcode)
    
        }else{
            categoryList.forEach(category => {
                path += getVariablePathString(isFirst,"searchCategories", category)
                isFirst = false
            });
        }
    }else{
        path = "clinics"
    }
    
    console.log("Searching Path : " + path)
    const url = process.env.REACT_APP_API_SERVER + path
    const response = await fetch(url)
    const res = await response.json()
    console.log("total clinic search: " + res.length)
    return res
}