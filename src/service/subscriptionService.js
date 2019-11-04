import {urls} from "../utils/constants"

export const subscription = async(userName,userEmail) => {
    let statusResponse = false
    let requestBody = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: userName,
            email:userEmail            
          })
      }
    const response = await fetch(urls.USER_SUBSCRIPTION,requestBody)
    const res = await response.status

    if(res===200){
        statusResponse = true
    } 
    return statusResponse
}