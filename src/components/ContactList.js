import React from 'react'
import {connect} from 'react-redux'
import Contact from './Contact'
import filterContacts from '../selectors/selectors'
import { sortByName, sortByEmail } from '../actions/filterActions'

const ContactList = (props) => (
    <div className="p-5">
        {props.contacts.length > 0 && <div className="pb-2">
            <button className="btn bg-dark text-light mx-1" onClick={(e) => props.dispatch(sortByName())}>Sort By Name</button>
            <button className="btn bg-dark text-light mx-1" onClick={(e) => props.dispatch(sortByEmail())}>Sort By Email</button>
        </div> }
        <div className="">
            {
                props.contacts.map((item) => 
                    ( 
                    <div key={item.id}><Contact {...item}/><br /></div> 
                    )
                )
            } 
        </div>  
    </div>
)

const mapStatetoProps = (state) => ({
    contacts: filterContacts(state.contacts, state.filters)
})

export default connect(mapStatetoProps)(ContactList)