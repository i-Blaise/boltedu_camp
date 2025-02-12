import "../css/Header.css"
import headerImage from "../assets/dashboard-header.png"
import CTAForm from "./CTAForm"

function Header() {
    return(
        <div className="header-container">
            <div className="header-text">
                <h1>Automate & Elevate Your School Management with AI</h1>
                <p>Our AI-driven School Management System empowers institutions with intelligent insights, streamlining operations, and optimizing academic performance.</p>
            </div>
            <div className="header-cta">
                <CTAForm />
            </div>
            <div className="header-image">
                <img src={headerImage} alt="a wireframe design of a dashboard" />
            </div>
        </div>
    )
}

export default Header