const addFilter = (selectedFilter) => {
    console.log(selectedFilter)
    return {
            type:   'ADD_FILTER',
            payload: selectedFilter
    }
}

export default addFilter