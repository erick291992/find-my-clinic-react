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
    localStorage.setItem("selectedClinic",JSON.stringify(clinic))
}

export let getSelectedClinic = () => {
    return JSON.parse(localStorage.getItem("selectedClinic"))
}