import './App.css'
import Footer from './components/Footer'
import Caraousel from './components/Carousel'
import Products from './components/product_card'
import Navigation from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Caraousel />
      <Products />
      <Footer /> 
    </div>
  )
}

export default App
