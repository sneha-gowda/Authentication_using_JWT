import Register from './Register.jsx'
import Login from './Login.jsx'
import App from './App.js'
import { Route, Routes } from 'react-router-dom';
function Home() {
    return (
        <>
            <Routes>
                <Route excat path="/" element={<App/>}></Route>
                <Route excat path="/register" element={<Register />}></Route>
                <Route excat path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default Home;