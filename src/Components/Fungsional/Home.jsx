// Untuk membuat component wajib import React
import React from 'react';
import Produk from '../Class/Produk';
import Blog from './Blog';


// Contoh menggunakan Props
const Home = () => {
    return (
        <div>
            {/* Ini State */}
            <Produk nama="Nature 2020" stock="10" harga="33 Juta" />
            <Produk nama="Nature 2019" stock="90" harga="33 Juta" />
            <Produk nama="Nature 2018" stock="110" harga="33 Juta" />
            <Produk nama="Nature 2017" stock="140" harga="33 Juta" />
            <Produk nama="Nature 2016" stock="70" harga="33 Juta" />

            {/* Ini Props */}
            {/* <Blog 
            tanggal="02 Juni 2020"
            judul="Teknologi Blockchain"
            summary="Lorem Ipsum saya karu dasertam kayuse matsubara"
            />
            <Blog 
            tanggal="03 Juni 2020"
            judul="Teknologi Internet of Things"
            summary="Lorem Ipsum saya karu dasertam kayuse matsubara"
            />
            <Blog 
            tanggal="04 Juni 2020"
            judul="Teknologi Android Studio"
            summary="Lorem Ipsum saya karu dasertam kayuse matsubara"
            /> */}
        </div>
    )
}

export default Home;