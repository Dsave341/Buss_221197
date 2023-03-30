import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "../pages/Login"
import Register from '../pages/Register';
import BusRegister from '../pages/BusRegister';
import MainTry from '../components/organins/MainTry';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/busregister' element={<BusRegister/>}/>
                <Route path='/try' element={<MainTry/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;