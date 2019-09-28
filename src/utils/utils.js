import React from 'react'
import createHistory from 'history/createBrowserHistory';

export let changeTo = (path) => {
    const history = createHistory();
    history.push('/'+path);
    history.go('/')
}

export let savelist = (list) => {
    sessionStorage.setItem('clinicList', JSON.stringify(list));
}

export let removeCategory = (list, category) =>{
    return list.filter(function(ele){
        return ele != category;
    });
}

export let filteredList = (list,filters) => {
        let listFiltered = []
        
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
        return listFiltered
}