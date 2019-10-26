export const HOUSING_CATEGORY = "Housing"
export const CONSUMER_CATEGORY ="Consumer"
export const FAMILY_CATEGORY ="Family"
export const BUSINESS_CATEGORY = "Business"
export const GENERAL_CATEGORY = "General"
export const LEGAL_CATEGORY = "Legal Procedure"
export const EMPLOYMENT_CATEGORY = "Employment"
export const IMIGRATION_CATEGORY = "Immigration"
export const TRUST_STATE_CATEGORY = "Trusts & Estates"
export const REAL_STATE_CATEGORY = "Real Estate"
export const MEDICAL_CATEGORY = "Medical"
export const CRIMINAL_CATEGORY = "Criminal"
export const MESSAGE_EMPTY_RESULTS = "We don't have any clinic searching with the filters."

//Links:
export const LINK_RESULT_MOVIL = ""


// LINKS FOR SERVICES
export var urls = {
 BASE: process.env.REACT_APP_API_SERVER,
 CLINICS: `${process.env.REACT_APP_API_SERVER}clinics`,
 CLINICS_FILTERED: `${process.env.REACT_APP_API_SERVER}find/clinics`,
 SEARCH_CATEGORIES:`${process.env.REACT_APP_API_SERVER}searchCategory`,
 USER_SUBSCRIPTION:`${process.env.REACT_APP_API_SERVER}subscribedUser`
} 
