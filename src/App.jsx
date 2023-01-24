import NavBar from './components/NavBar';
import './App.css';
import ItemsListContainer from  './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/context/CartContext';
import ThemeContextProvider from './components/context/ThemeContext';
import Cart from './components/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import TankYou from './components/ThankYou';


function App() {
  return (
    <CartContextProvider>
      <ThemeContextProvider>
      <BrowserRouter> 
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<ItemsListContainer />} />
                    <Route path={"/categoria/:id"} element={<ItemsListContainer />} />
                    <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/checkout"} element={<Checkout/>}/>
                    <Route path={"/tankyou/:id"} element={<TankYou/>}/>
                    <Route path={"*"} element={<Error404 />} />
                </Routes>

                <Footer/>
        </BrowserRouter>
        </ThemeContextProvider>
      </CartContextProvider>
  );
}

export default App;
