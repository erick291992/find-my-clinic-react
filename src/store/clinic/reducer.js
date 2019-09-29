const initialState = { clinics: [],clinicsFiltered:[],singleClinic:[],clinic:null};

// action es el valor devuelto por el action
//action.payload será el valor que quiero añadir, borrar, etc
export default (state = initialState, action) => {
    if (action.type === 'ADD_CLINICS') {
        return {
            ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
            clinics: action.payload
        }
    }
    if (action.type === 'ADD_FILTERED') {
        return {
            ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
            clinicsFiltered: action.payload
        }
    }

    if (action.type === 'ADD_SINGLE_CLINIC') {
        return {
            ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
            singleClinic: action.payload
        }
    }
    if(action.type ==='SELECTED_CLINIC'){
               return {
                    ...state,
                    clinic:action.payload
                }
    }
    if(action.type ==='DELETE_CLINIC'){
        return {
             ...state,
             clinic:action.payload
         }
}

    return state;
};

export const selectActiveClinics = state => state.clinicReducer.clinics;
export const selectFilteredClinics = state => state.clinicReducer.clinicsFiltered;
export const selectedClinic = state => state.clinicReducer.clinic;
export const singleListClinic = state => state.clinicReducer.singleClinic