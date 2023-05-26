import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    const handleMinPriceChange = (event) => {
        setMinPrice(parseFloat(event.target.value));
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseFloat(event.target.value));
    };

    return (
        <FilterContext.Provider
            value={{ minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange }}
        >
            {children}
        </FilterContext.Provider>
    );
};
