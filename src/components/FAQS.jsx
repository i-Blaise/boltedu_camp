import style from "../css/FAQS.module.css"
import FAQAccordion from "./FAQAccordion"

function FAQS() {
    return(
        <div className={style.faqsContainer}>
            <h3>FAQ'S</h3>
            <h2>Got Questions? We’ve Got Answers</h2>
            <p>Find quick answers to the most common queries about Boostify.</p>

            <div className={style.accordion}>
                <FAQAccordion />
            </div>
        </div>
    )
}

export default FAQS