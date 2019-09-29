
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

export const addSingleClinic = (list) => {
    console.log("From Action Clinic - addSingleClinic", list)
    return {
            type: 'ADD_SINGLE_CLINIC',
            payload: list
    }
}


export const clinicSelected = (clinic) => {
    console.log("From Action Clinic - clinicSelected",clinic)
    return {
        type:'SELECTED_CLINIC',
        payload:clinic
    }
}

export const deleteClinicSelected = () => {
    console.log("From Action Clinic - deleteClinicSelected")
    return {
        type:'DELETE_CLINIC',
        payload:null
    }
}

//export default ({addClinics,addFiltered,clinicSelected})