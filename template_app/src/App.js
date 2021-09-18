import './styles/App.scss'
import { FAQPage } from './pages/public/faqPage'
import { NavigationTop } from './components/navagation/navTop'
import { Footer } from './components/navagation/footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavigationTop />
      <FAQPage />
      <Footer />
    </div>
  )
}

export default App