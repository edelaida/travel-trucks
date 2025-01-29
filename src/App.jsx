//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header.jsx';
import { Catalog } from './pages/Catalog.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { TrucksCart } from './pages/TrucksCart.jsx';
import { NotFound } from "./pages/NotFound.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/campers' element={<Catalog />} />
        <Route path='/campers/:id' element={<TrucksCart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
};
 
