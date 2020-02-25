import React from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/loginActions'

// Component for 'Sign Up'.
// Allows user to create user in database. 

class Signup extends React.Component {
    render(){
        return (
            <main role="main" className="inner cover text-light m-5 p-5 text-center">
                <div className="d-flex flex-column bg-dark p-2 w-50 justify-content-between">
                    <h3>Sign Up</h3>
                    <form onSubmit={(e) => {
                        // when submitted, data is passed to 'signup' action
                        e.preventDefault()
                        const username = e.target.elements.username.value.trim()
                        const email = e.target.elements.email.value.trim()
                        const password = e.target.elements.password.value.trim()
                        this.props.signup(email, username, password)
                        // then 'refreshes' using 'this.props.history.push('/')'
                        this.props.history.push('/')
                    }}>
                        <label htmlFor="username">Username</label><br/>
                        <input type="text" id="username"/><br/>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" id="email"/><br/>
                        <label htmlFor="password">Password</label><br/>
                        <input type="text" id="password"/><br/>
                        {
                            // if error occurs, error is displayed
                            this.props.creds.error ?
                            <div>
                                <br/>
                                    <p id="error">{this.props.creds.error}</p>
                                <br/>
                            </div>
                            :
                            <br/>
                        }
                        <button className="btn bg-secondary text-light">Submit</button>
                    </form>
                </div>
            </main>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signup : (email, username, password) => dispatch(signup(email, username, password))
})

const mapStatetoProps = (state) => ({
    creds: state.login
})

export default connect(mapStatetoProps, mapDispatchToProps)(Signup)