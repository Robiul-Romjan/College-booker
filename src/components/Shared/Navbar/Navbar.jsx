import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    // log out
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error.message)
        })
    }

    const navMenu = <>
        <li className="px-3 hover:text-red-200 transition"><NavLink className="header-link" to="/">Home</NavLink></li>
        <li className="px-3 hover:text-red-200 transition"><NavLink className="header-link" to="/colleges">Colleges</NavLink></li>
        <li className="px-3 hover:text-red-200 transition"><NavLink className="header-link" to="/admission">Admission</NavLink></li>
        <li className="px-3 hover:text-red-200 transition"><NavLink className="header-link" to="/my-college">MyCollege</NavLink></li>
        <div className="form-control relative">
            <input type="text" placeholder="Search colleges" className="input input-md input-bordered w-full text-black" />
            <button className="absolute p-2 right-0 mt-2 me-2 bg-[#3c12c6] rounded-full"> <BsSearch className="text-white" /> </button>
        </div>
    </>
    return (
        <div className="navbar bg-[#4021a5] text-white fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to="/" className="hidden md:block normal-case text-xl">CollegeBooker</Link>
            </div>

            <div className="navbar-center hidden lg:flex ">
                <ul className=" menu-horizontal px-1 flex items-center">
                    {navMenu}
                </ul>
            </div>


            <div className="navbar-end">
                {
                    user ? <Link to="/user-profile" className="me-5">{user.displayName ? user.displayName : "" }</Link>: ""
                }
                {
                    user ? <button onClick={handleLogOut} className="btn btn-sm md:btn-md">Log Out</button> :
                    <Link to="/login" className="btn btn-sm md:btn-md">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;