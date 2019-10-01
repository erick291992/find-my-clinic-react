import React from 'react'
import createHistory from 'history/createBrowserHistory';

export let changeTo = (path) => {
    const history = createHistory();
    history.push('/'+path);
    history.go('/')
}

export let removeCategory = (list, category) =>{
    return list.filter(function(ele){
        return ele != category;
    });
}

//get path variable as string
export let getVariablePathString = (isFirst, variableName,value) => {
        return isFirst?"?"+variableName+"="+value:"&"+variableName+"="+value
}

// Return filterd list
export let filteredList = (list,filters) => {
    let listFiltered = []
    if(filters.length==0){
        listFiltered = list
    }else{
        
    list.forEach(clinic=>{
        let hasCategory = false
        clinic.searchCategories.forEach(cat=>{
            if(filters.includes(cat) && hasCategory===false){
                hasCategory = true
                listFiltered.push(clinic)
            }
        })
    })
    console.log("From Util Function:")
    console.log("-------------------")
    console.log(listFiltered.length)
    
    }
    return listFiltered
        
}

// save filters(category)
export let saveFilters = (filters) => {
    localStorage.setItem("filters",JSON.stringify(filters))
}

export let getFilters = () => {
    return JSON.parse(localStorage.getItem("filters"))
}
//save zipcode
export let saveZipcode = (zipcode) => {
    localStorage.setItem("zipcode",zipcode)
}

export let getZipcode = () => {
    return localStorage.getItem("zipcode")
}

export let cleanFilterStorage = () => {
    localStorage.clear()
}

//save Clinic Id
export let saveClinicId = (id) => {
    localStorage.setItem("clinicId",id)
}

export let getClinicId = () => {
    return JSON.stringify(localStorage.getItem("clinicId"))
}

//save filtered list
export let saveFilterList = (list) => {
    localStorage.setItem("filterList",JSON.stringify(list))
}

export let getFilterList = () => {
    return JSON.parse(localStorage.getItem("filterList"))
}

//Save Selected Clinic from map
export let saveSelectedClinic = (clinic) => {
    console.log("Saving Selection")
    localStorage.setItem("selectedClinic",JSON.stringify(clinic))
}

export let getSelectedClinic = () => {
    return JSON.parse(localStorage.getItem("selectedClinic"))
}

export let reOrderList = (clinic,list) =>{

        let newList = [];
        newList.push(clinic);
        list.forEach(lis => {
          if (clinic._id != lis._id) {
            newList.push(lis);
          }
        });
        console.log("Re order: ", newList.length);
        return newList;
}
