
export const addClinics = (clinics) => {

    return {
            type: 'ADD_CLINICS',
            payload: clinics
    }
}

export const addFiltered = (clinics) => {

    return {
            type: 'ADD_FILTERED',
            payload: clinics
    }
}
