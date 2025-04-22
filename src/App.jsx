import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ContextProvider } from './context/context';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App(greetings) {
  return (  
    <ContextProvider>
    {/* <Navbar/>
    <ItemListContainer greetings="Bienvenidos a Aviles-Barber"/> */}
        <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}  />
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}  />
          <Route path="/detalle/:id" element={<ItemDetail/>}  />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<p>404 ROUTE NOT FOUND</p>} />
        </Routes>
        </BrowserRouter>
        </ContextProvider>
  );
};

export default App
