import React, { Component } from 'react'
import './CSS/Produk.css';

import React, { Component } from 'react'


// Ketik rcc biar auto generate code
// Contoh menggunakan State
export default class Produk extends Component {
    constructor(props) {
        super(props)

        this.state= {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    ButtonBeli = () => {
        // Pakai setState jika ingin merubah state
        this.setState ({
            stock: this.state.stock - 1
        })

        if(this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render() {
        return (
            <div className='box-stock'>
                <h3>{this.props.nama}</h3>
                <img src="https://placeimg.com/640/480/nature" alt="" />
                <h3>{this.props.harga}</h3>
                <p>{this.state.stock}</p>
                <button className='btn-click' onClick={this.ButtonBeli} disabled={this.state.disabled} >Beli</button>
                <p>{this.state.status}</p>
            </div>
        )
    }
}
