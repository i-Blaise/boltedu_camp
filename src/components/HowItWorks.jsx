import StepOneImg from "../assets/step1.png"
import StepTwoImg from "../assets/step2.png"
import StepThreeImg from "../assets/step3.png"
import style from "../css/HowItWorks.module.css"

function HowItWorks() {
    return(
        <div className={style.hiwContainer}>
            <h3>How It Works</h3>
            <h2>A Simple, 3-Step Process</h2>
            <p>BoltEdu Ghana leverages AI to make school management automation effortless—just follow these simple steps to get started.</p>

            <div className={style.stepsContainer}>
                <img src={StepOneImg} alt="step1 image" />
                <img src={StepTwoImg} alt="step2 image" />
                <img src={StepThreeImg} alt="step3 image" />
            </div>
        </div>
    )
}

export default HowItWorks