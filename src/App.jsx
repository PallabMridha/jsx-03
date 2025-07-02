import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Routlayout from './Components/layouts/Routlayout';


function App() {

  return (
   <>
     <Routes>
    {/* <Route path="" element={<Error/>}/> */}

       <Route>
         <Route path="/" element={<Routlayout />} />
         <Route index element={<Home/>} />
       </Route>
   
    </Routes>
   </>
  )
}

export default App
