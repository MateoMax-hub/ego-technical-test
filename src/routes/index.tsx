import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "../layouts/Layout"
import Home from "../pages/home/view/Home"
import CarDetails from "../pages/carDetails/view/CarDetails"

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRoutes
