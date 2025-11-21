import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainSection from "./pages/MainSection.tsx";
import Layout from "./components/Layout/Layout.tsx";
import ErrorRoute from "./components/ErrorRoute.tsx";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";

function App() {

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainSection/>}/>
                        <Route path="*" element={<ErrorRoute/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App




