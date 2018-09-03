import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import { loadUser } from './store/authReducer'

const mapDispatchToProps = dispatch => ({
    load: () => {
      dispatch(loadUser())
    }
})

class Application extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.load()
    }

    render(){
        return (
            <div>
                <Router history={this.props.history}/>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Application)