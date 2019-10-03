
export const addClinics = (clinics) => {
    console.log("From Action Clinic - addClinics",clinics)
    return {
            type: 'ADD_CLINICS',
            payload: clinics
    }
}

export const addFiltered = (clinics) => {
    console.log("From Action Clinic - addFiltered",clinics)
    return {
            type: 'ADD_FILTERED',
            payload: clinics
    }
}
