import React, { useContext } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import { CartContext } from '../../CartContext';
import CardComp from './CardComp';

export default function AboutComp(props) {
    
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">About Page </h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Belajar React" tanggal="27-12-2021"/></Col>
                    <Col><CardComp id="2" judul="Belajar Laravel" tanggal="27-12-2022"/></Col>
                    <Col><CardComp id="3" judul="Belajar AI" tanggal="27-12-2023"/></Col>
                </Row>
            </Container>
        </div>
    )
}
