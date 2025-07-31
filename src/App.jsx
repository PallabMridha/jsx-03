import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Routlayout from './Components/layouts/Routlayout';
import Shop from './Components/pages/Shop';
import About from './Components/pages/About';
import Contacts from './Components/pages/Contacts';
import Journal from './Components/pages/Journal';
import ProductsDatils from './Components/pages/ProductsDatils';







function App() {

  return (
   <>
     <Routes>
    {/* <Route path="" element={<Error/>}/> */}

       <Route path="/" element={<Routlayout/>}> 
         <Route path='/' element={<Home/>} />
         <Route path='/Shop' element={<Shop />} />
         <Route path='/about' element={<About />} />
         <Route path='/contacts' element={<Contacts />} />
         <Route path='/journal' element={<Journal />} />
         <Route path='/ProductsDatils' element={<ProductsDatils/>} />
         
         
       </Route>
   
    </Routes>
   </>
  )
}

export default App
