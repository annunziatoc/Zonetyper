import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/layout"
import MainPage from "./pages/MainPage"
function App() {

   
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default App



