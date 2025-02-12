import "../css/NavBar.css"
import logo from '../assets/boltedu-logo.png';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="brand logo" />
                <a className="navbar-brand-name" href="#">BoltEdu Ghana</a>
            </div>
            <div className="navbar-links">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Features</a>
                <a href="#" className="nav-link">Benefits</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
            <div className="nav-cta">
                <a href="" className="nav-cta-btn">Join The Waitlist</a>
            </div>
        </nav>
    )
}

export default NavBar