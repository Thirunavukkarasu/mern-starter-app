import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Home from './Home'

class SignIn extends React.Component {

  render(){
    const { user } = this.props

    return (
      <Fragment>
          { !user ? <div style={{
            display: 'flex',
            height: '50vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
          }}>
              <a href="/api/auth/google"  className="btn btn-danger" style={{backgroundColor: '#dd4b39'}}>
                <i className="fa fa-google" />{' '} Sign in with Google
              </a>                             
          </div> 
          : <Home/>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.auth.user
})

export default connect(mapStateToProps)(SignIn)