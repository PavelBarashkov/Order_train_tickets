import type React from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "@components"

export const LayoutMainApp: React.FC = () => {
  return (
    <div className="app_container w-100 h-100">
      <main className="main">
          <Outlet />
      </main>
      <Footer />
    </div>
  )
}
