import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <nav className=" md:px-10 lg:px-20">
                <Navbar />
            </nav>
            <Outlet />
            <Toaster />
            <Footer />
        </div>
    );
};

export default Main;