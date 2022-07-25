import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './Componant/AddContact';
import EditContact from './Componant/EditContact';
import Home from './Componant/Home';
import BtNavbar from './Componant/Navbar';

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <BtNavbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddContact/>} />
                    <Route path='/edit/:id' element={<EditContact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
