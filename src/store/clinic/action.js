
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

export const clinicSelected = (clinic) => {
    console.log("From Action Clinic - clinicSelected",clinic)
    return {
        type:'SELECTED_CLINIC',
        payload:clinic
    }
}

//export default ({addClinics,addFiltered,clinicSelected})