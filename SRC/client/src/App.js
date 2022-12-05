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
import { useEffect } from 'react';
import { CmsManager } from './services/CmsManager';
import { getTravels } from './store/slices/travels/travelSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { manageUser } from './services/manageUsers';
import { userData } from './store/slices/auth/authSlice'
import { getCart } from './services/cartManager';
import { addCartSlice } from './store/slices/cart/cartSlice';

function App() {
  const { user, isLoading, isAuthenticated } = useAuth0()
  const { users } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    CmsManager(null, 'getTravels', null, null)
      .then(res => {
        console.log(res);
        dispatch(getTravels(res.data))
      })

    if (!isLoading && isAuthenticated) {
      manageUser(user).then(res => {
        dispatch(userData(res))
        getCart(res._id).then(resCart => {
          console.log(resCart);
          dispatch(addCartSlice(resCart))
        })
      })

    }

  }, [dispatch, isLoading, user, isAuthenticated])

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detailsTravel/:id' element={<DetailsTravel />} />
          <Route path='/manejadorCMS' element={<ManejadorCMS />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
