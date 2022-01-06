import React, { useReducer } from 'react'
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap'

const initialState = 0

// Fungsi ini akan memanipulasi data dari initialstate
const reducer = (state, action) => {
    switch (action) {
        case 'tambah': return state + 1
        case 'kurang': return state - 1
        default: 
            return state
    }
}

export default function HooksReducer() {
    // Buat dispatch untuk memanggil useReducer
    const[count, dispatch] = useReducer(reducer, initialState)
    // dispatch: aksinya, count: statenya

    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                    </Card>
                </Col>
                <Col xs="6">
                    <h3>Action Figure Naruto</h3>
                    <p>Harga</p>
                    <h3>Rp. 130.000</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={()=>dispatch('tambah')} color='danger'>+</Button></Col>
                        <Col>{count}</Col>
                        <Col><Button onClick={()=>dispatch('kurang')}>-</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
