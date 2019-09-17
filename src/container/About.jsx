import React, {Component} from 'react'
import Menu from '../component/Menu'

class About extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Menu/>
                <div>
                    <h2>About Us</h2>
                </div>
            </div>
        )
    }
}

export default About