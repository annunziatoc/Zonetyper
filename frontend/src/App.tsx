import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";
import ErrorRoute from "./components/ErrorRoute.tsx";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";

function App() {

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="*" element={<ErrorRoute/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App


