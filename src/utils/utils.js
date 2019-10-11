import createHistory from 'history/createBrowserHistory';

export let changeTo = (path) => {
    const history = createHistory();
    history.push('/'+path);
    history.go('/')
}

export let removeCategory = (list, category) =>{
    return list.filter(function(ele){
        return ele != category;
    });
}

// save filters(category)
export let saveFilters = (filters) => {
    localStorage.setItem("filters",JSON.stringify(filters))
}

export let getFilters = () => {
    return JSON.parse(localStorage.getItem("filters"))
}
//save zipcode
export let saveZipcode = (zipcode) => {
    localStorage.setItem("zipcode",zipcode)
}

export let getZipcode = () => {
    return localStorage.getItem("zipcode")
}

export let cleanFilterStorage = () => {
    //localStorage.clear()
    localStorage.removeItem('zipcode');
    localStorage.removeItem('filters');
    localStorage.removeItem('selectedClinic');
}

//Save Selected Clinic from map
export let saveSelectedClinic = (clinic) => {
    localStorage.setItem("selectedClinic",JSON.stringify(clinic))
}

export let getSelectedClinic = () => {
    return JSON.parse(localStorage.getItem("selectedClinic"))
}

export let reOrderList = (clinic,list) =>{

        let newList = [];
        newList.push(clinic);
        list.forEach(lis => {
          if (clinic._id != lis._id) {
            newList.push(lis);
          }
        });
        console.log("Re order: ", newList.length);
        return newList;
}

export let newOrderList = (id,list) => {
    let indexNumber=-1
    let selected = null
    let num =null 
    list.forEach(item=>{
    indexNumber=indexNumber+1
    if(item.id===id){
        num = indexNumber
        selected= item
        return
    }
    })

    delete list[num]
    list.splice(num,1)
    list.unshift(selected)
    return list
}

export let findIconPath = (categoryName) =>{
    switch(categoryName){
        case "Housing": return "./icons/housing-icon.png"
            break;
        case "Consumer": return "./icons/consumer-icon.png"
            break;
         case "Family": return "./icons/family-icon.png"
            break;
        case "Criminal": return "./icons/criminal-icon.png"
            break;
        case "Business": return "./icons/business-icon.png"
            break;
        case "Real Estate": return "./icons/realstate-icon.png"
            break;
        case "General": return "./icons/general-icon.png"
            break;
        case "Trusts & Estates": return "./icons/trustandstates-icon.png"
            break;
        case "Medical": return "./icons/medical-icon.png"
            break;
        case "Legal Procedure": return "./icons/legalprocedure-icon.png"
            break;
        case "Employment": return "./icons/employment-icon.png"
            break;
        case "Immigration": return "./icons/immigration-icon.png"
            break;
    }
}