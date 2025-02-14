import OneIcon from "../assets/1.png"
import TwoIcon from "../assets/2.png"
import ThreeIcon from "../assets/3.png"
import BenefitsImg from "../assets/benefits-img.png"
import style from "../css/Benefits.module.css"



function Benefits() {
    return (
        <div className={style.benefitsContainer}>
            <h2>Benefits</h2>
            <h1>Why Choose Our AI-Powered School Management System?</h1>
            <p>Explore how AI can revolutionize your school's efficiency and decision-making.</p>
            <div className={style.benefitsRow}>
                <div className={style.benefitsText}>
                    <div className={style.benefits}>
                        <img src={OneIcon} alt="" />
                        <div className={style.texts}>
                            <h3>Smart Data Insights</h3>
                            <p>AI analyzes academic, financial, and administrative data to provide real-time, actionable recommendations. Ask specific questions like, "Which students are at risk of falling behind, and why?" </p>
                        </div>
                    </div>
                    <div className={style.benefits}>
                        <img src={TwoIcon} alt="" />
                        <div className={style.texts}>
                            <h3>Automated Workflows</h3>
                            <p>Streamline tasks with AI-driven automation for attendance, grading, academic reports, fee reminders, reporting, and scheduling.</p>
                        </div>
                    </div>
                    <div className={style.benefits}>
                        <img src={ThreeIcon} alt="" />
                        <div className={style.texts}>
                            <h3>Seamless Integrations</h3>
                            <p>Effortlessly integrates with existing school tools, LMS, and ERP systems.</p>
                        </div>
                    </div>
                </div>
                <div className={style.benefitsImage}>
                    <img src={BenefitsImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Benefits