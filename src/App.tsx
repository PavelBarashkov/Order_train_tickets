import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./pages/helpers/components/AppRouter"
import { Header } from "./modules/Header"
import { Footer } from "./modules/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_container w-100 h-100">
        <Header />
        <main className="content">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
