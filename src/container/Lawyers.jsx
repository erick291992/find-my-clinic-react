import React, {Component} from 'react'
import Menu from '../component/Menu'

class Lawyer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Menu/>
                <div>
                    <h2>Lawyers</h2>
                </div>
            </div>
        )
    }
}

export default Lawyer