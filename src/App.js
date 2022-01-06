import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutComp from './Components/Fungsional/AboutComp';
import HomePage from './Components/Fungsional/HomePage';
import ListComp from './Components/Class/ListComp';
import TambahComp from './Components/Class/TambahComp';
import EditComp from './Components/Class/EditComp';
import DetailComp from './Components/Fungsional/DetailComp';
// import BootstrapComp from './Components/Class/BootstrapComp';
// import Parent from './Components/Class/Parent';
import NavBarComp from './Components/Fungsional/NavBarComp';
// import './App.css';
// import Home from './Components/Fungsional/Home';
// import Blog from './Components/Fungsional/Blog';
// import Beranda from './Components/Class/Beranda';
import KelasComp from './Components/Hooks/Class/KelasComp';
import HooksComp from './Components/Hooks/Functional/HooksComp';
import HooksUseEffects from './Components/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Components/Hooks/Functional/ProductComp';
import HooksReducer from './Components/Hooks/Functional/HooksReducer';

// Props dan State adalah Properti, seperti pada html ada class, id, value, href
/* 
Props : props ini diluar class atau class parent
tidak bisa dirubah, kecuali menggunakan hooks  

State : disimpan dan di ubah di component itu sendiri  dengan tipe class 
jika data berubah, maka state pun ikut berubah
*/

const App = () => {
  const[value, setValue] = useState(0)

  return (
    // Router dan Passing Data #27, 28 
    <BrowserRouter>
      {/* useContext : Agar data dapat diakses secara global */}
      <CartContext.Provider value={{value, setValue}}>
        <NavBarComp />
        <Switch>
          {/* Crud */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/detail/:id" component={DetailComp} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path='/mahasiswa/tambah' component={TambahComp} />
          <Route exact path='/mahasiswa/edit' component={EditComp} />

          {/* Hooks useState */}
          <Route exact path='/kelas' component={KelasComp} />
          <Route exact path='/functional' component={HooksComp} />

          {/* Hooks useEffects */}
          <Route exact path='/useeffect' component={HooksUseEffects} />

          {/* useContext : Agar data dapat diakses secara global */}
          <Route exact path='/produk' component={ProductComp}/>

          {/* useReducer : Untuk membuat useState lebih Kompleks */}
          <Route exact path='/reducer' component={HooksReducer} />

        </Switch>
      </CartContext.Provider>
    </BrowserRouter>

    // <div className="App">
    //   {/* Mencoba Bootstrap */}
    //   {/* <BootstrapComp /> */}

    //   {/* Passing Data antar Component */}
    //   {/* <Parent /> */}

    //   {/* Props dan State */}
    //   {/* <Home /> */}
    // </div>
  );
}

export default App;
