import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div className="navbar bg-zinc-100">
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
                        className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="text-xl font-bold"><NavLink to="/"
                            style={({ isActive }) => {
                                return {

                                    color: isActive ? "#0000FF" : "black",

                                };
                            }}
                        >Statistics</NavLink></li>
                        <li className="text-xl font-bold"><NavLink to="/applid"
                            style={({ isActive }) => {
                                return {

                                    color: isActive ? "#0000FF" : "black",

                                };
                            }}
                        >Applid Jobs</NavLink></li>
                        <li className="text-xl font-bold"><NavLink to="/block"
                            style={({ isActive }) => {
                                return {

                                    color: isActive ? "#0000FF" : "black",

                                };
                            }}
                        >Blog</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    <li className="text-xl font-bold"><NavLink to="/"
                        style={({ isActive }) => {
                            return {

                                color: isActive ? "#0000FF" : "black",

                            };
                        }}
                    >Statistics</NavLink></li>
                    <li className="ml-10 text-xl font-bold"><NavLink to="/applid"
                        style={({ isActive }) => {
                            return {

                                color: isActive ? "#0000FF" : "black",

                            };
                        }}
                    >Applid Jobs</NavLink></li>
                    <li className="ml-10 text-xl font-bold"><NavLink to="/AllJobs"
                        style={({ isActive }) => {
                            return {

                                color: isActive ? "#0000FF" : "black",

                            };
                        }}
                    >All Jobs</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-blue-700 text-white hover:bg-black">Start Appling</a>
            </div>
        </div>
    );
};

export default Navber;