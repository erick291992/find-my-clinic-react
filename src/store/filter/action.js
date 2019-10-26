export const addFilter = (selectedFilter) => {

    return {
            type:   'ADD_FILTER',
            payload: selectedFilter
    }
}

export const removeFilter = () => {

    let empty = []
    return {
            type:   'REMOVE_FILTER',
            payload: empty
    }
}
