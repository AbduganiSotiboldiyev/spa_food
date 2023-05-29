
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./styles/main.css"

export default function Header() {
    

    
    return (
            <nav className="navbar navbar-expand-lg nav_bg ">
                <div className="container d-flex justify-content-between nav_cont ">
                        <Link className="navbar-brand text-light" to="/">Best Chef</Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                       
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
        </nav>
        )
}