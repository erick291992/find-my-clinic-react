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