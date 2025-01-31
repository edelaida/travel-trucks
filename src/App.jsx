//import css from "./app.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "./redux/contactsOps";
// import { HomePages } from "./pages/HomePages.jsx";
// import { Header } from './components/Header/Header.jsx' 

// const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.contacts.isLoading);
  // const error = useSelector((state) => state.contacts.error);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

//   return (
//     <div >
//       <Header />
//       <HomePages />
//     </div>
//   );
// };
// export default App;



import { Route, Routes } from "react-router-dom";
import { Catalog} from "./pages/Catalog.jsx";
//import Cart from "./pages/Cart";
import {HomePages} from "./pages/HomePages.jsx";
import { Header } from './components/Header/Header.jsx';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="*" element={<HomePages />} />
      </Routes>
    </div>
  );
};
//export default App;