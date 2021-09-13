import './styles/App.scss'
import { SignupPage } from './pages/public/signupPage'
import { NavigationTop } from './components/navagation/navTop'
import { Footer } from './components/navagation/footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavigationTop />
      <SignupPage />
      <Footer />
    </div>
  )
}

export default App