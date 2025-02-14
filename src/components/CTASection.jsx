import ctaImage from "../assets/ctaImage.png"
import style from "../css/CTASection.module.css"
import CTAForm from "./CTAForm"

export default function CTASection() {
    return (
        <div className={style.ctaRow}>
            <div className={style.ctaTexts}>
                <h3>Sign Up Today!</h3>
                <h1>Unlock Exclusive Early Access & Discounts!</h1>
                <p className={style.ctaItalics}>Be the First to Experience AI-Powered School Management</p>
                <p>Join our waitlist today and enjoy up to 50% off your subscription, plus exclusive early access to all features! As a valued early adopter, you’ll get:</p>

                    <ul>
                        <li>Full access to our AI-powered platform for seamless school management
                        </li>
                        <li>
                        Priority onboarding and personalized support
                        </li>
                        <li>
                        Early feature updates before anyone else
                        </li>
                        <li>
                        Up to 2 months free trial for waitlist members
                        </li>
                    </ul>
                    <p>
                    Don’t miss out on this limited-time offer—sign up now and transform the way you run your school!
                </p>
                <div className={style.form}>
                    <CTAForm />
                </div>
            </div>
            <div className={style.ctaImage}>
                <img src={ctaImage} alt="" />
            </div>
        </div>
    )
}