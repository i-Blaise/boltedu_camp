import '../src/css/App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'


function App() {
  return (
    <div className="app-background">
      <NavBar />
      <Header />
      <About />
      <Features />
    </div>
  )
}

export default App
