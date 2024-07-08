import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
import useAuth from './../../hook/useAuth';
import toast from "react-hot-toast";

const Navbar = () => {
    const { user,logOut } = useAuth()
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/hw">Home Work</NavLink></li>
        <li><NavLink to="/suggestion">Suggestion</NavLink></li>
    </>

    const handleSignOut = ()=>{
        logOut()
        .then(()=>{
            toast.success('Sign Out Successfully')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="p-5 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow space-y-2" >
                        {navLinks}
                    </ul>
                </div>
                <a className="text-xs md:text-[18px] font-bold leading-[10px] font-PlaywriteUSModern">
                    <span className="text-[10px] md:text-sm ml-2 md:ml-3 text-mainColor ">Cst</span>
                    <br />
                    Study Zone
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-5 mt-3 px-1 text-[16px]">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link 
                        onClick={handleSignOut}
                            className="text-xs md:text-[16px] bg-mainColor py-2 md:py-3 px-3 rounded  font-semibold hover:cursor-pointer">
                            Sign Out
                        </Link> :
                        <Link to="/signIn"
                            className="text-xs md:text-[16px] bg-mainColor py-2 md:py-3 px-3 rounded  font-semibold hover:cursor-pointer">
                            Sign In
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;