import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';

class CardEntity extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
            <Row style={cardDescriptionStyleActive}>
                <Col xs="6">
                    <img src={this.props.url}/>
                </Col>
                <Col xs="6">
                    <div>
                        <h2>{this.props.title}</h2>
                        <label>{this.props.subtitle}</label><br/>
                        <label>{this.props.hours}</label><br/>
                        <label>{this.props.categories}</label>
                    </div>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default CardEntity

const cardDescriptionStyleActive =    {
    padding:"3%",
    backgroundColor:"#D6EAF8"
}

const cardDescriptionStyleNoActive =    {
    padding:"3%",
    backgroundColor:"#FFFFFF"
}