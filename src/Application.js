import React from 'react';
import Header from "./components/Header";
import Router from './Router'

class Application extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <Header/>
                <Router/>
            </div>
        )
    }
}

export default Application