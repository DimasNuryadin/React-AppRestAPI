import React, { useState } from 'react'
import TampilComp from './TampilComp';

// Hooks adalah metode pemrograman react yang membuat component fungsi dapat digunakan state

const HooksComp = () => {
    // Jumlah adalah nama state, setJumlah adalah nama fungsi untuk state
    const [jumlah, tambahJumlah] = useState(0)

    // Login
    const [dataLogin, setDataLogin] = useState({username:'Dimas', token: '123abcd', isLogin: true})

    // Cek kondisi login / belum
    let tampil;
    // Jika data isLogin nya bernilai true
    if(dataLogin.isLogin) {
        tampil = <TampilComp
        username = {dataLogin.username}
        // Bind akan mengirimkan data berdasarkan apa yang dijumlahkan
        fungsi = {tambahJumlah.bind(this)}
        jumlah = {jumlah}/>
    } else {
        // Jika belum login buttonnya tidak berfungsi
        tampil = <TampilComp username="Maaf anda belum login" disabled={true}/>
    }

    return (
        <div>
            {tampil}
        </div>
    )
}

export default HooksComp