import uuid from 'uuid'

export const addContact = ({name, email, phone=""} = {}) => ({
    type:'ADD_CONTACT',
    contact:{
        id: uuid(),
        name,
        email,
        phone
    }
})
export const removeContact = ({id} = {}) => ({
    type:'REMOVE_CONTACT',
    id
})
export const editContact = (id, updates) => ({
    type:'EDIT_CONTACT',
    id,
    updates
})
export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    contacts
})