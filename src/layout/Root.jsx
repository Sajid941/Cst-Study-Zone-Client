import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <nav className=" md:px-10 lg:px-20">
                <Navbar />
            </nav>
            <Outlet />
        </div>
    );
};

export default Main;