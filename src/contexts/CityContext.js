import React, { createContext, useState, useEffect } from 'react';

const CityContext = createContext();

const CityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const storedCity = localStorage.getItem('selectedCity');
        if (typeof storedCity === 'string') {
            setSelectedCity(storedCity);
        }
    }, []);

    const selectCity = (city) => {
        setSelectedCity(city);
        localStorage.setItem('selectedCity', city);
    };

    return (
        <CityContext.Provider value={{ selectedCity, selectCity }}>
            {children}
        </CityContext.Provider>
    );
};

export { CityContext, CityProvider };
