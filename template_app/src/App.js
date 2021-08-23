import './App.scss'
import { LandingPage } from './pages/public/landingPage'
import { NavigationTop } from './components/navagation/navTop'
import { Footer } from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavigationTop />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App