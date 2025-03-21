import { Route, Routes, Navigate, Link } from "react-router";
import { HomePage } from './HomePage';
import {AboutPage} from './AboutPage';
import { LoginPage } from './LoginPage'
import {Navbar} from './components'
import { UserProvider } from "./context/UserProvider";



export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>Main App</h1>  */}

            <Navbar />

            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* <Route path="/*" element={<LoginPage />}  /> */}

                <Route path="/*" element={ <Navigate to="/about" /> } />
            </Routes>
        </UserProvider>
    );
}