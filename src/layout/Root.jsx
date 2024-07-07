import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <nav className=" md:px-10 lg:px-20">
                <Navbar />
            </nav>
            <Outlet />
            <Toaster/>
        </div>
    );
};

export default Main;