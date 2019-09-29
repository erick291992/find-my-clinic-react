import { async } from "q";

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

export const getFilteredClinics = async(filters) => {
    const url = process.env.REACT_APP_API_SERVER + 'clinics'
    let data = {"filters":filters}
    let requestBody = {
        method: 'post',
        headers:  {
                    'Content-Type':'application/json'
                  },
        body: JSON.stringify(data)
    }
    const response = await fetch(url,requestBody)
    const res = await response.json()
    return res
}