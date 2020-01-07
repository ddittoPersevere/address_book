const filterReducerDefaultState = {
    name: "",
    email: "",
    phone: "",
    sortBy: "name"
}
export default (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name:action.name
            }
        case 'SET_EMAIL_FILTER':
            return {
                ...state,
                email:action.email
            }
        case 'SET_PHONE_FILTER':
            return {
                ...state,
                phone:action.phone
            }
        case 'SORTBY_NAME':
            return {
                ...state,
                sortBy:'name'
            }
        case 'SORTBY_EMAIL':
            return {
                ...state,
                sortBy:'email'
            }        
        default:
            return state
    }
}