import NavBar from './components/NavBar';
import './App.css';
import ItemsListContainer from  './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error404 from './components/Error404';

function App() {
  return (<BrowserRouter> 
            <NavBar/>

            <Routes>
                <Route path={"/"} element={<ItemsListContainer />} />
                <Route path={"/categoria/:id"} element={<ItemsListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                <Route path={"*"} element={<Error404 />} />
            </Routes>
              

    </BrowserRouter>
  );
}

export default App;
