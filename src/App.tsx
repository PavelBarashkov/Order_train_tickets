import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./pages/helpers/components/AppRouter"

const App = () => {
  return (
    <BrowserRouter>
     <div className="app_container w-100 h-100">
      <header className="App-header">
      </header>
      <main className="content">
          <AppRouter />
        </main>
    </div>
    
    </BrowserRouter>
  )
}

export default App
