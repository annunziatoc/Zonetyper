import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./routes/Home"
import Leaderboard from "./routes/Leaderboard"
import Results from "./routes/Results"
function App() {

   
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/results" element={<Results />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default App



