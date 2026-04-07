import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import MainPage from "./routes/Index"
import Leaderboard from "./routes/Leaderboard"
import ResultsScreen from "./routes/Results"
function App() {

   
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/results" element={<ResultsScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default App



