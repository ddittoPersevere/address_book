import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "../components/Header"
import Home from "../components/Home"
import Error from "../components/Error"
import SearchContact from "../components/SearchContact"
import { connect } from 'react-redux'
import { setContacts } from '../actions/contactActions'
import EditContact from '../components/EditContact'
import AddContact from '../components/AddContact'


class AppRouter extends React.Component {
    componentDidMount(){
        try{
            const json = localStorage.getItem('contacts')
            console.log(json)
            const contacts = JSON.parse(json)
            if(contacts){
                this.props.dispatch(setContacts(contacts))
            }
        }catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.contacts !== this.props.contacts){
            const json = JSON.stringify(this.props.contacts)
            localStorage.setItem('contacts', json)
        }
    }
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/show" component={SearchContact} exact={true} />
                        <Route path="/edit/:id" component={EditContact} exact={true} />
                        <Route path="/add" component={AddContact} exact={true} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts : state.contacts
})

export default connect(mapStateToProps)(AppRouter)