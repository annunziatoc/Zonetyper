import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage"
import Layout from "./layout/layout"
import AboutPage from "./pages/aboutPage"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default App



