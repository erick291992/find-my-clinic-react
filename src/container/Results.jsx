import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import Menu from '../component/Menu'
import Map from '../component/Map'
import CardEntity from '../component/CardEntity'


class Results extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Menu/>
                <Container fluid >
                    <Row noGutters>
                        <Col xs="4" >
                            <CardEntity title="ssss" subtitle="xxxx" hours="9:00" categories="cat" url="/#"/>
                        </Col>
                        <Col xs="8">
                            <Map w={"100%"} h={"100vh"}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Results