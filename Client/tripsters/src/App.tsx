import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import { getUser } from './services/identityService';
import TripCreateForm  from './components/Trip/TripCreateForm';

function App() {

    const [name, setName] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        (
            async () => {
                var response = await getUser();

                var content = await response.json();

                setName(content.userName)
                setId(content.id)
            }
        )();

    });

    return (

        < div className="App" >
            <Header name={name} id={id} setName={setName} setId={setId} />
            <Routes>
                <Route path="/" element={<Home name={name} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setName={setName} setId={setId} />} />
                <Route path="/addTrips" element={<TripCreateForm />} />
            </Routes>
            <Footer />
        </div >
    );
}

export default App;
