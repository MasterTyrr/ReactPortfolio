import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useEffect, useState } from 'react';
import './App.css';
import WeatherForecast from './pages/WeatherForecast'
import Home from './pages/Home'
//import ListProjects from './pages/Portfolio'

const WeatherForecastPage = () => {
    return (
        <>
            <WeatherForecast />
        </>
    );
}

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/Forecast" element={< WeatherForecastPage />} />
                {/*<Route path="/project/:id" element={<ProjectPageLayout />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;