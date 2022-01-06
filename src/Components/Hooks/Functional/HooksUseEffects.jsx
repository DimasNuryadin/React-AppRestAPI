import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import { Button, Table } from 'reactstrap'

// Port API
const api = 'http://localhost:3001'

function HooksUseEffects() {

    // Tangkap data mahasiswa
    const [mahasiswa, setMahasiswa] = useState([])

    // Fungsi ini akan mengambil data pada axios
    useEffect(() => {
        console.log("Memanggil Use Effect")
        // Get karena akan ambil data
        axios.get(api + '/tampil').then(res => {
            setMahasiswa(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2>Data Mahasiswa</h2>
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
                    {mahasiswa.map(mahasiswa =>
                        <tr key={mahasiswa.id_mahasiswa}>
                            <td>{mahasiswa.nim} </td>
                            <td>{mahasiswa.nama} </td>
                            <td>{mahasiswa.jurusan} </td>
                            <td>
                                <Button>Edit</Button>
                                <span></span>
                                <Button onClick={() => this.Deletemahasiswa(mahasiswa.id_mahasiswa)} color='danger'>Hapus</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default HooksUseEffects