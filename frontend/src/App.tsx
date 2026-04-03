import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/layout"
import MainPage from "./pages/MainPage"
import Leaderboard from "./pages/leaderboard/Leaderboard"
function App() {

   
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default App



