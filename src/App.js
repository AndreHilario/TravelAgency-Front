import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components";

export default function App() {

    return (
        <AppContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    )
}

const AppContainer = styled.div`

`;
