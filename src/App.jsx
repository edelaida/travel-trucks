import { Route, Routes } from "react-router-dom";
import { Catalog} from "./pages/Catalog.jsx";
import { HomePages } from "./pages/HomePages.jsx";
import {NotFound} from './pages/NotFound.jsx'
import { Layout } from "./components/Layout.jsx";
import { Cart } from "./pages/Cart.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchCampers} from '../src/redux/campers/operations.js'

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div>      
      <Routes>
        <Route path='/' element={<Layout/>} > 
          <Route index element={<HomePages />} />
          <Route path='campers/' element={<Catalog />}/>
          <Route path='campers/:id' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>     
    </div>
  );
};
