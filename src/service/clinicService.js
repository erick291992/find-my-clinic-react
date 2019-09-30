import { async } from "q";
import {getVariablePathString} from "../utils/utils"

export const getClinics = async()=>{
    const url = process.env.REACT_APP_API_SERVER + 'clinics'
    const response = await fetch(url)
    const res = await response.json()
    return res
}

export const getClinic = async(id)=>{
    const url = process.env.REACT_APP_API_SERVER + 'clinics/'+ id
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

export const getFilteredClinics = async(categoryList, zipcode) => {
    let path = "find/clinics"
    let isFirst = true
    if(zipcode != null){
        isFirst = false
        categoryList.forEach(category => {
            path += getVariablePathString(isFirst,"searchCategories", category)
        })
        path+=getVariablePathString(isFirst,"zipcode",zipcode)

    }else{
        isFirst = false
        categoryList.forEach(category => {
            path += getVariablePathString(isFirst,"searchCategories", category)
        })
    }
    console.log("Searchng Path : " + path)
    const url = process.env.REACT_APP_API_SERVER + path
    const response = await fetch(url)
    const res = await response.json()
    return res
}