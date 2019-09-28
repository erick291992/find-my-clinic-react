
const addClinics = (clinics) => {
    console.log(">>>>>>",clinics)
    return {
            type: 'ADD_CLINICS',
            payload: clinics
    }
}

const addFiltered = (clinics) => {
    console.log("XXXXX",clinics)
    return {
            type: 'ADD_FILTERED',
            payload: clinics
    }
}

const clinicSelected = (clinic) => {
    return {
        type:'SELECTED_CLINIC',
        payload:clinic
    }
}

export default ({addClinics,addFiltered,clinicSelected})