import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'


// Materi Parsing data antar komponen #24
export default class Parent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            stock:10
        }
    }

    // Function untuk beli
    beliProduk = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah
        })
    }

    render() {
        return (
            <div>
                {/* Karena beliProduk akan digunakan Call back maka harus pakai .bind(this) */}
                <Child1 
                stock={this.state.stock}
                fungsi={this.beliProduk.bind(this)}
                />
                <Child2 stock={this.state.stock} />
            </div>
        )
    }
}
