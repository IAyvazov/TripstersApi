import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getUser } from './services/identityService';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import TripCreateForm from './components/Trip/TripCreateForm';
import Trips from './components/Trip/Trips';
import TripDetails from './components/Trip/TripDetails';
import MyTrips from './components/Trip/MyTrips';

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
                <Route path="/trip/create" element={<TripCreateForm />} />
                <Route path="/trip/all" element={<Trips />} />
                <Route path="/trip/:id" element={<TripDetails />} />
                <Route path="trip/my" element={<MyTrips userId={id} />} />
            </Routes>
            <Footer />
        </div >
    );
}

export default App;
