import '../src/css/App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'


function App() {
  return (
    <div className="app-background">
      <NavBar />
      <Header />
      <About />
    </div>
  )
}

export default App
