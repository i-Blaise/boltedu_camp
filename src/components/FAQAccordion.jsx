import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import AnimatedAccordionContent from './AnimatedAccordionCOntent';
import { PlusIcon } from '@radix-ui/react-icons';
import style from '../css/FAQAccordion.module.css';

function FAQAccordion() {
  return (
    <Accordion.Root type="single" defaultValue="item-1" >
      <Accordion.Item value="item-1" className={style.itemRow}>
        <Accordion.Header>
          <Accordion.Trigger asChild className={style.accordionTrigger}>
            <div className="custom-trigger">
              <span className={style.accordionNum}>01.</span>
              <span className={style.accordionTitle}>How does AI improve school management?</span>
              <PlusIcon className={style.AccordionPlusIcon} aria-hidden />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>

        <AnimatedAccordionContent className={style.accordionContent}>
            <span className={style.accordionDesc}>
            AI transforms school management by automating administrative tasks, enhancing efficiency, and minimizing errors. 
              <br />
              Key benefits include:
              <ul>
              <li>Seamless Data Management</li>
              <li>Automated Workflows</li>
              <li>Smart Insights</li>
              <li>Improved Communication</li>
              <li>Effortless Data Migration</li>
              </ul>
              <br />
              With AI, school operations become more streamlined, allowing educators to focus on delivering quality education.
            </span>
        </AnimatedAccordionContent>
      </Accordion.Item>

      <Accordion.Item value="item-2" className={style.itemRow}>
        <Accordion.Header>
          <Accordion.Trigger asChild className={style.accordionTrigger}>
            <div className="custom-trigger">
              <span className={style.accordionNum}>02.</span>
              <span className={style.accordionTitle}>Can I migrate my school's existing data??</span>
              <PlusIcon className={style.AccordionPlusIcon} aria-hidden />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>

 
        <AnimatedAccordionContent className={style.accordionContent}>
            <span className={style.accordionDesc}>
            Absolutely! Migrating your school's data is a seamless process. Simply upload your files—whether it's an Excel sheet, CSV, PDF, or DOCX—and our intelligent system will automatically sort and organize the data for you. No more tedious, repetitive data entry! <br /> <br/>
            Plus, our dedicated support agents are always on standby to assist you at any stage of the process. We ensure a smooth and hassle-free transition so you can get started with confidence!
            </span>
        </AnimatedAccordionContent>
      </Accordion.Item>

      <Accordion.Item value="item-3" className={style.itemRow}>
        <Accordion.Header>
          <Accordion.Trigger asChild className={style.accordionTrigger}>
            <div className="custom-trigger">
              <span className={style.accordionNum}>03.</span>
              <span className={style.accordionTitle}>Is there a free trial?</span>
              <PlusIcon className={style.AccordionPlusIcon} aria-hidden />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>


        <AnimatedAccordionContent className={style.accordionContent}>
            <span className={style.accordionDesc}>
            Yes! We offer a one-month free trial to all new users, allowing you to experience our platform with no commitment. However, if you joined our waitlist, you get an exclusive two-month free trial as a special thank-you for your early interest. <br /> <br/>

            This is the perfect opportunity to explore all our features and see how our platform can benefit you. Get started today and make the most of your free trial!
            </span>
        </AnimatedAccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default FAQAccordion;
