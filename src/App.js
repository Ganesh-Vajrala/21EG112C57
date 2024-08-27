import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductPage from './ProductPage';
import AllProductsPage from './AllProductsPage';

function App() {
 return (
  <Router>
   <Routes>
    <Route path = "/" element={<AllProductsPage/>}/>
    <Route path='/product/:id' element ={<ProductPage/>}/>
   </Routes>
  </Router>
 );
}

export default App;
