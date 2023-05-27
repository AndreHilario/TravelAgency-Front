import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components";
import { CityProvider } from "./contexts/CityContext";
import FlightsPage from "./pages/FlightsPage/FlightsPage";
import OptionsPage from "./pages/OptionsPage/OptionsPage";
import HostingPage from "./pages/HostingPage/HostingPage";
import DescriptionFlightPage from "./pages/DescriptionFlightPage/DescriptionFlightPage";
import { FilterProvider } from "./contexts/FilterContext";
import DescriptionHostingPage from "./pages/DescriptionHostingPage/DescriptionHostingPage";

export default function App() {

    return (
        <AppContainer>
            <BrowserRouter>
                <CityProvider>
                    <FilterProvider>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/options" element={<OptionsPage />} />
                            <Route path="/flights" element={<FlightsPage />} />
                            <Route path="/flights/:id" element={<DescriptionFlightPage />} />
                            <Route path="/hosting" element={<HostingPage />} />
                            <Route path="/hosting/:id" element={<DescriptionHostingPage />} />
                        </Routes>
                    </FilterProvider>
                </CityProvider>
            </BrowserRouter>
        </AppContainer>
    )
}

const AppContainer = styled.div`

`;
