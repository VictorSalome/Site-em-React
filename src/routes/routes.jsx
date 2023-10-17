import { Route, Routes } from 'react-router-dom';
import Login from '../Container/Login/login';
import Home from '../Container/Home/Home';
import Product from '../Container/Product/Product';
import Service from '../Container/Service/Service';
import Contact from '../Container/Contact/Contact';
import About from '../Container/About/About';









function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/product' element={<Product />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/about' element={<About />} />
            
         
          
           

        </Routes>
    )
}

export default Router