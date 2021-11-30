import './styles/App.scss'
import { ContactUsPage } from './pages/public/contactUsPage'
import { NavigationTop } from './components/navagation/navTop'
import { Footer } from './components/navagation/footer'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavigationTop />
      <Outlet />
      <ContactUsPage />
      <Footer />
    </div>
  )
}

export default App