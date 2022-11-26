import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
    return (
        <>
            {/* <nav classNameName="navbar navbar-expand-lg bg-light">
                <div classNameName="container-fluid">
                <Link to="/" classNameName="navbar-brand">Navbar</Link>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarNav">
                        <ul classNameName="navbar-nav ms-auto">
                            <li classNameName="nav-item">
                             <Link to="/" classNameName="nav-link active">Home</Link>
                            </li>
                            <li classNameName="nav-item">
                            <Link to="/about" classNameName="nav-link">About</Link>
                            </li>
                            <li classNameName="nav-item">
                            <Link to="/login" classNameName="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="index.html" className="logo">
                           <Link to="/" className="logo" style={{ color: 'inherit', textDecoration: 'inherit'}}>Mahitab</Link> 
                        </a>
                        <ul className="nav">
                            <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                            <li className="scroll-to-section">
                            <Link to="/about" classNameName="nav-link">About</Link>
                            </li>
                            <li className="scroll-to-section"><a href="#men">Men's</a></li>
                            <li className="scroll-to-section"><a href="#women">Women's</a></li>
                            <li className="scroll-to-section"><a href="#kids">electronic's</a></li>
                            <li className="scroll-to-section"><a href="#kids">jewelery</a></li>
                            <li className="scroll-to-section"><a href="/cart"><ShoppingCartOutlinedIcon/></a></li>
                            <li className="scroll-to-section"><Link to="">Login</Link></li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}
export default Navbar;