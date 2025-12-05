import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainSection from "./components/MainSection.tsx";
import Layout from "./components/Layout/Layout.tsx";
import ErrorRoute from "./components/Layout/ErrorRoute.tsx";
import {ThemeProvider} from "./providers/ThemeContext.tsx";

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




