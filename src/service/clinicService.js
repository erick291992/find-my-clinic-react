import { async } from "q";

export const getClinics = async()=>{
    const url = process.env.REACT_APP_API_SERVER + 'clinics'
    const response = await fetch(url)
    const res = await response.json()
    return res
}