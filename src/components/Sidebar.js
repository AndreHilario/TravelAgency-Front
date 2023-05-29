import styled from "styled-components";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { useLocation } from "react-router-dom";

export default function Sidebar({ setFilterApplied, setHotelFilter, showSidebar, setShowSidebar }) {


  const { minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange } = useContext(FilterContext);

  const location = useLocation();

  const handleFilter = () => {
    if (location.pathname === "/flights") {
      setShowSidebar(!showSidebar);
      setFilterApplied(true);
    }

    if (location.pathname === "/hosting") {
      setShowSidebar(!showSidebar);
      setHotelFilter(true);
    }


  }

  return (
    <SidebarContainer>
      <FilterSection>
        <h3>Filtre por Preço</h3>
        <span>Preço mínimo: {minPrice}</span>
        <input type="range" min="0" max="5000" step="0.01" value={minPrice} onChange={handleMinPriceChange} />
        <span>Preço máximo: {maxPrice}</span>
        <input type="range" min="100" max="25000" step="0.01" value={maxPrice} onChange={handleMaxPriceChange} />
      </FilterSection>
      <FilterButton>
        <button onClick={handleFilter}>Filtrar</button>
      </FilterButton>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 500px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 80px;
  left: 0px;
  z-index: 2;
  transition: left 0.5s ease-in-out;
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
    cursor: pointer;
  }
  span {
    margin-top: 50px;
  }
`;

const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
