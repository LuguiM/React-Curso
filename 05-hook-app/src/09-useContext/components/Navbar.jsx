import { Link, NavLink } from "react-router";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">


                    <ul className="navbar-nav">

                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            About
                        </NavLink>


                        <NavLink
                            to="/login"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}