import React from "react";
import { Link } from "react-router-dom";
function Navbartop() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-none fixed-top">
                <div className="container">
                    <div className="navbar brand">TCS</div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-items">
                            <Link className="nav-link" to={'/'}>App component</Link>
                        </li>

                        <li className="nav-items">
                        <Link className="nav-link" to={'/Mountain'}>Mountain component</Link>


                        </li>

                        <li className="nav-items">
                        <Link className="nav-link" to={'/Fire'}>Fire component</Link>

                        </li>

                        <li className="nav-items">
                        <Link className="nav-link" to={'/Quotes'}>Quotes component</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>


    )
}
export default Navbartop