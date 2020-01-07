const contactReducerDefaultState = []
export default (state = contactReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_CONTACTS':
            return action.contacts
        case 'ADD_CONTACT':
            return [...state, action.contact]
        case 'REMOVE_CONTACT':
            return state.filter((item) => item.id !== action.id)
        case 'EDIT_CONTACT':
            return state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        ...action.updates
                    }
                }else{
                    return item
                }
            })
        default:
            return state
    }
}