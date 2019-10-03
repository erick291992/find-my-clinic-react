const initialState = { clinics: [],clinicsFiltered:[]};

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

    return state;
};

export const selectActiveClinics = state => state.clinicReducer.clinics;
export const selectFilteredClinics = state => state.clinicReducer.clinicsFiltered;