import type React from "react"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./pages/helpers/components/AppRouter"
import "./App.css"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
