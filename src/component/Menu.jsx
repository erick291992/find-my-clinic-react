import React, {Component} from 'react';
import Filter from '../component/Filter'
import 'bootstrap/dist/css/bootstrap.css';
import '../component/Menu.css'
import Signup from '../component/Signup'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Button,Label} from 'reactstrap';


function ItemClinic(){
    return(
                <NavItem>
                    <NavLink href="/results">Clinics</NavLink>
                </NavItem>
    )
}

function FilterSearch(){
    return(
                <NavItem style={{marginRight:"100px", textAlign:"left"}}>
                    <Filter/>
                </NavItem>
    )
}  

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
          isOpen: false
        };
        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        let width   =   window.innerWidth;
        let isMovil   =   false
        let clinicLink  =   ""
        let filter  =   FilterSearch()

        if(width<600){
            clinicLink  =   ItemClinic()
            filter  =   ""
            isMovil  = true
        }
        
        return(
            <div style={{zIndex:10}}>
                <Navbar color="light" light expand="md" style={{minHeight:"120px",padding:"4px 20px",backgroundColor:"#FFFFFF"}}>
                <NavbarBrand href="/"><img src="legal4all-logo.png" alt="Smiley face" height="auto" width="100"/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar style={isMovil?{textAlign:"left"}:null}>
                        <p style={{textAlign:"left",marginTop:'8px'}}><Label>NYC’s legal aid providers. All in one place</Label>
                        {filter}</p>
                    <NavItem style={{paddingTop:"-10px"}}>
                        <Signup/>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/lawyer">Needs a Lawyed?</NavLink>
                    </NavItem>
                    {clinicLink}
                    <NavItem>
                        <NavLink href="/about">About Us</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }

}
export default Menu