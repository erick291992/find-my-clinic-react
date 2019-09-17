const addClinics = (clinics) => {
    console.log(clinics)
    return {
            type: 'ADD_CLINICS',
            payload: clinics
    }
}

export default addClinics