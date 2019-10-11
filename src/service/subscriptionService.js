export const subscription = async(userName,userEmail) => {
    let statusResponse = false
    const url = process.env.REACT_APP_API_SERVER + 'subscribedUser'
    let requestBody = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: userName,
            email:userEmail            
          })
      }
    const response = await fetch(url,requestBody)
    const res = await response.status

    if(res===200){
        statusResponse = true
    } 
    return statusResponse
}