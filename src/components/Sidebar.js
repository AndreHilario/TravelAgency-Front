import { useState } from "react";
import styled from "styled-components";

export default function Sidebar() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(3.14);

    const handleMinPriceChange = (event) => {
        setMinPrice(parseFloat(event.target.value));
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseFloat(event.target.value));
    };

    return (
        <SidebarContainer>
            <FilterSection>
                <h3>Filtrar por Preço</h3>
                <span>Preço mínimo: {minPrice}</span>
                <input type="range" min="0" max="5000" step="0.01" value={minPrice} onChange={handleMinPriceChange} />
                <span>Preço máximo: {maxPrice}</span>
                <input type="range" min="100" max="7000" step="0.01" value={maxPrice} onChange={handleMaxPriceChange} />
            </FilterSection>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 80px;
  left: 0px;
  z-index: 2;
  transition: left 0.3s ease-in-out;

  /* Adicione estilos adicionais à sua sidebar, se necessário */
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  h3 {
    color: #000;
  }
  input[type="range"] {
    width: 100%;
    height: 8px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #ddd;
    border-radius: 4px;
    outline: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: #0000cd;
    border-radius: 50%;
    cursor: pointer;
  }
  span {
    margin-top: 50px;
  }
`;

