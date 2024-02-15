import type React from "react"
import { Routes, Route } from "react-router-dom"
import { publicRoutes } from "../routes/routes"
import { LayoutMainApp } from "../../../layouts"

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMainApp />}>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  )
}
