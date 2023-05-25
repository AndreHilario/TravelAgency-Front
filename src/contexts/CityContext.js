import React, { createContext, useState } from 'react';

const CityContext = createContext();

const CityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState('');

    const selectCity = (city) => {
        setSelectedCity(city);
    };

    return (
        <CityContext.Provider value={{ selectedCity, selectCity }}>
            {children}
        </CityContext.Provider>
    );
};

export { CityContext, CityProvider };