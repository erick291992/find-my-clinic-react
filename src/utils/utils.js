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