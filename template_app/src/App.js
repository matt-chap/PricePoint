import logo from './logo.svg'
import './App.scss'
import { LandingPage } from './pages/public/landingPage'
import { NavigationTop } from './components/navagation/navTop'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavigationTop />
      <LandingPage />
    </div>
  )
}

export default App