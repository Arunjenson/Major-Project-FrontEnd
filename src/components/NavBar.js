import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand me-5" to="/">FarmIT</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown px-2 ml-2">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu px-2">
                                    <li><a className="dropdown-item" href="/">Crop Recommendation</a></li>
                                    <li><a className="dropdown-item" href="/">Fertilizer Recommendation</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2 ml-2">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </a>
                                <ul className="dropdown-menu px-2">
                                    <li><a className="dropdown-item" href="/">Market Place</a></li>
                                    <li><a className="dropdown-item" href="/">E-Learning</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className='navbar-nav d-flex flex-lg-row flex-column  align-items-start align-items-lg-center'>
                            <li className="nav-item dropdown px-2 ml-2">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </a>
                                <ul className="dropdown-menu px-2">
                                    <li><a className="dropdown-item" href="/">Kannada</a></li>
                                </ul>
                            </li>
                            <li className="px-2">
                                <NavLink className="nav-link px-4 button button-outline" to="/login">Login</NavLink>
                            </li>
                            <li className="px-2">
                                <NavLink className="button button-primary nav-link px-4" to="/signup">Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar