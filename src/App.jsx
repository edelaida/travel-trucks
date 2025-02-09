import { Route, Routes } from "react-router-dom";
import { Catalog} from "./pages/Catalog.jsx";
import { HomePages } from "./pages/HomePages.jsx";
import {NotFound} from './pages/NotFound.jsx'
import { Layout } from "./components/Layout.jsx";
import { Cart } from "./pages/Cart.jsx";


export const App = () => {
  return (
    <div>      
      <Routes>
        <Route path='/' element={<Layout/>} > 
          <Route index element={<HomePages />} />
          <Route path='campers' element={<Catalog />} />
          <Route path='campers/id' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>     
    </div>
  );
};
