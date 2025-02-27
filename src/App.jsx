import '../src/css/App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import FAQS from './components/FAQS'
import CTASection from './components/CTASection'


function App() {
  return (
    <div className="app-background">
      <NavBar />
      <Header />
      <About />
      <Features />
      <Benefits />
      <HowItWorks />
      <FAQS />
      <CTASection />
    </div>
  )
}

export default App
