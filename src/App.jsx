import { Route, Routes } from "react-router-dom";
import { Catalog} from "./pages/Catalog.jsx";
import { HomePages } from "./pages/HomePages.jsx";
import {NotFound} from './pages/NotFound.jsx'
import css from "./App.module.css";
import { Layout } from "./components/Layout.jsx";


export const App = () => {
  return (
    <div className={css.wrapper} >      
      <Routes>
        <Route path='/' element={<Layout/>} > 
        <Route index element={<HomePages />} />
        <Route path='campers' element={<Catalog />} />
          <Route path='*' element={<NotFound />} />
          </Route>
      </Routes>     
    </div>
  );
};
