import { createBrowserHistory } from 'history';

export let changeTo = (path) => {
	const history = createBrowserHistory();
	history.push('/' + path);
	history.go('/')
}

export let removeCategory = (list, category) => {
	return list.filter(function(ele) {
		return ele !== category;
	});
}

// save filters(category)
export let saveFilters = (filters) => {
	localStorage.setItem("filters", JSON.stringify(filters))
}

export let getFilters = () => {
	return JSON.parse(localStorage.getItem("filters"))
}
//save zipcode
export let saveZipcode = (zipcode) => {
	localStorage.setItem("zipcode", zipcode)
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
	localStorage.setItem("selectedClinic", JSON.stringify(clinic))
}

export let getSelectedClinic = () => {
	return JSON.parse(localStorage.getItem("selectedClinic"))
}

export let reOrderList = (clinic, list) => {

	let newList = [];
	newList.push(clinic);
	list.forEach(lis => {
		if (clinic._id !== lis._id) {
			newList.push(lis);
		}
	});
	return newList;
}

export let newOrderList = (id, list) => {
	let indexNumber = -1
	let selected = null
	let num = null
	list.forEach(item => {
		indexNumber = indexNumber + 1
		if (item.id === id) {
			num = indexNumber
			selected = item
			return
		}
	})

	delete list[num]
	list.splice(num, 1)
	list.unshift(selected)
	return list
}

export let findIconPath = (categoryName) => {
	let pathImage = ""
	switch (categoryName) {
		case "Housing": pathImage = "./icons/housing-icon.png"
			break;
		case "Consumer": pathImage = "./icons/consumer-icon.png"
			break;
		case "Family": pathImage = "./icons/family-icon.png"
			break;
		case "Criminal": pathImage = "./icons/criminal-icon.png"
			break;
		case "Business": pathImage = "./icons/business-icon.png"
			break;
		case "Real Estate": pathImage = "./icons/realstate-icon.png"
			break;
		case "General": pathImage = "./icons/general-icon.png"
			break;
		case "Trusts & Estates": pathImage = "./icons/trustandstates-icon.png"
			break;
		case "Medical": pathImage = "./icons/medical-icon.png"
			break;
		case "Legal Procedure": pathImage = "./icons/legalprocedure-icon.png"
			break;
		case "Employment": pathImage = "./icons/employment-icon.png"
			break;
		case "Immigration": pathImage = "./icons/immigration-icon.png"
			break;
		default:
			console.log("No path...")
	}
	return pathImage;
}