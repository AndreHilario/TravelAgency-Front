import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import styled from "styled-components";
import { CityContext } from "../../contexts/CityContext";
import { useNavigate } from "react-router-dom";

export default function MenuHomePage() {

    const [cities, setCities] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [city, setCity] = useState('');

    const { selectCity } = useContext(CityContext);
    const navigate = useNavigate();

    useEffect(() => {

        apiAuth
            .getCities()
            .then(res => setCities(res.data))
            .catch(err => alert(err.response.data))
    }, []);

    function chooseCity(name) {
        setCity(name);
        selectCity(name);
        if (window.confirm(`Quer seguir e ver as opções para a cidade de ${name} ?`)) {
            navigate("/options");
        }
    }

    function toggleDropdown() {

        setIsOpen(!isOpen);
    }

    return (
        <MenuHomePageContainer>
            <DropdownWrapper>
                <DropdownInput onClick={toggleDropdown} placeholder="Selecione a cidade desejada" value={city} readOnly />
                <DropdownArrow onClick={toggleDropdown}>
                    ▼
                </DropdownArrow>
                <DropdownContent isOpen={isOpen}>
                    {cities.map((city) => (
                        <DropdownItem key={city.id} onClick={() => chooseCity(city.name)}>
                            {city.name}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            </DropdownWrapper>
        </MenuHomePageContainer>
    );
};

const MenuHomePageContainer = styled.main`
      display: flex;
      flex-direction: column;
    `;

const DropdownWrapper = styled.div`
      display: flex;
      align-items: center;
      margin-top: 50px;
      justify-content: center;
    `;

const DropdownInput = styled.input`
      padding: 10px;
      width: calc(100vh - 200px);
      font-size: 16px;
      border: 2px solid #446275;
      border-radius: 4px;
      background-color: #fff;
      outline: none;
      ::placeholder {
        color: #000;
        font-size: 20px;
      }
      
    `;

const DropdownArrow = styled.div`
      padding: 8px;
      cursor: pointer;
      font-size: 16px;        
`;

const DropdownContent = styled.div`
      display: ${(props) => (props.isOpen ? 'block' : 'none')};
      justify-content: center;
      position: absolute;
      top: 170px;
      left: 505px;
      width: 800px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      border: 2px solid #446275;
      border-radius: 4px;
      z-index: 1;
    `;

const DropdownItem = styled.div`
      display: block;
      color: black;
      background-color: #fff;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 20px;
    
      &:hover {
        background-color: #c1c1c1;
      }
    `;