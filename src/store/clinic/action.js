
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

export default ({addClinics,addFiltered})