export const addFilter = (selectedFilter) => {
    console.log(selectedFilter)
    return {
            type:   'ADD_FILTER',
            payload: selectedFilter
    }
}

export const removeFilter = () => {
    console.log("remove filter")
    let empty = []
    return {
            type:   'REMOVE_FILTER',
            payload: empty
    }
}
