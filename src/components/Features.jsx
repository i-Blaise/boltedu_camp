import "../css/Features.css"
import FeatureCard from "./FeatureCard"
import FeatureIcon from "../assets/feature_icon.png"
import AIicon from "../assets/ai-icon.png"
import ConnectedIcon from "../assets/connected-icon.png"
import GraphIcon from "../assets/graph-icon.png"
import TimeIcon from "../assets/time.png"


function Features() {
    return (
        <div className="features-container">
            <h3>Main Features</h3>
            <div className="feature-row">
                <div className="feature-text">
                    <img src={FeatureIcon} alt="" />
                    <h2>Transform the Way You Manage Your School with AI</h2>
                    <p>Running a school is challenging, but it doesn’t have to be overwhelming. Our AI-driven school management system is built to save you time, reduce workload, and improve efficiency—so you can focus on what truly matters: educating your students.</p>
                </div>
                <div className="cards-container">
                    <FeatureCard
                    icon={TimeIcon}
                    title={"Automate Tasks & Save Time"}
                    description={"Tired of endless administrative work? Let AI handle attendance, scheduling, and reports automatically—so you can spend more time on meaningful tasks."}
                    />
                    <FeatureCard 
                    icon={AIicon}
                    title={"Make Smarter Decisions with AI Insights"}
                    description={"Eliminate guesswork with real-time analytics on student performance, attendance, and operations. Ask AI specific questions for precise insights to boost both learning and management outcomes."}
                    />
                    <FeatureCard 
                    icon={ConnectedIcon}
                    title={"Keep Everyone Connected"}
                    description={"Enhance communication between teachers, students, and parents with AI-powered notifications and messaging—ensuring everyone stays informed and engaged."}
                    />
                    <FeatureCard
                    icon={GraphIcon}
                    title={"AI-Powered Student Records Management"}
                    description={"Keep track of student data, grades, and attendance effortlessly. AI helps organize, update, and retrieve records instantly—so you never have to dig through paperwork again."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Features