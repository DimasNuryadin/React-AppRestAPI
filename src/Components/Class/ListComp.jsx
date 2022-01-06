import React, { Component } from 'react'
// Untuk Menampilkan data perlu import axios
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

// Port API
const api = 'http://localhost:3001'

export default class ListComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // Tampung Data Mahasiswa ke dalam array karna datanya banyak
            mahasiswa: [],
            // Untuk menampilkan data response, apakah success statusnya
            response: '',
            display: 'none'
        }
    }

    // Siklus di react js yang akan di load
    componentDidMount() {
        // Get karena akan ambil data
        axios.get(api + '/tampil').then(res => {
            // Ketika data berhasil di ambil, akan ada perubahan state
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    // Hapus Mahasiswa berdasarkan id
    Deletemahasiswa = (idmahasiswa) => {
        const { mahasiswa } = this.state;
        // let arrayids = [];
        // stateMahasiswa.forEach(d => {
        //     if (d.select) {
        //         arrayids.push
        //     }
        // });

        const data = qs.stringify({
            id_mahasiswa: idmahasiswa
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== idmahasiswa),
                    display: 'block'
                })
                // Untuk pindah halaman ke component mahasiswa
                this.props.history.push('/mahasiswa')
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                // this.props.history.push('/mahasiswa')
            }
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <h2>Data Mahasiswa</h2>
                    <Alert color='success' style={{ display: this.state.display }}>
                        {this.state.response}
                    </Alert>
                    <Link to='/mahasiswa/tambah'>
                        <Button color='success'>
                            Tambah Data
                        </Button>
                    </Link>
                    <Table className="table-bordered">
                        <thead>
                            <tr>
                                <th>NIM</th>
                                <th>Nama</th>
                                <th>Jurusan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Looping Data Mahasiswa dengan Map */}
                            {this.state.mahasiswa.map(mahasiswa =>
                                <tr key={mahasiswa.id_mahasiswa}>
                                    <td>{mahasiswa.nim} </td>
                                    <td>{mahasiswa.nama} </td>
                                    <td>{mahasiswa.jurusan} </td>
                                    <td>
                                        <Link to={
                                            {
                                                pathname: `/mahasiswa/edit`,
                                                state: {
                                                    id_mahasiswa: mahasiswa.id_mahasiswa,
                                                    nim: mahasiswa.nim,
                                                    nama: mahasiswa.nama,
                                                    jurusan: mahasiswa.jurusan
                                                }
                                            }
                                        }>
                                            <Button>Edit</Button>
                                            <span></span>
                                        </Link>
                                        <Button onClick={()=>this.Deletemahasiswa(mahasiswa.id_mahasiswa)}  color='danger'>Hapus</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
