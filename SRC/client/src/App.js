import './page/css/style.css'
import { Home } from './page/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { DetailsTravel } from './components/DetailsTravel/DetailsTravel';
import { ManejadorCMS } from './page/manejadorCMS/ManejadorCMS';
import { ShoppingCart } from './page/ShoppingCart/ShoppingCart';
import { Page404 } from './components/404Page/404Page';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detailsTravel' element={<DetailsTravel />} />
          <Route path='/manejadorCMS' element={<ManejadorCMS />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
