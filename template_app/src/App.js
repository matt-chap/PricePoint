import './styles/App.scss'
import { LoginPage } from './pages/public/loginPage'
import { NavigationTop } from './components/navagation/navTop'
import { Footer } from './components/navagation/footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavigationTop />
      <LoginPage />
      <Footer />
    </div>
  )
}

export default App