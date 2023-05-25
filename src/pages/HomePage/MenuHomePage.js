import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import styled from "styled-components";
import { CityContext } from "../../contexts/CityContext";
import { useNavigate } from "react-router-dom";

export default function MenuHomePage() {

    const [cities, setCities] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const { selectCity } = useContext(CityContext);
    const navigate = useNavigate();

    useEffect(() => {

        apiAuth
            .getCities()
            .then(res => setCities(res.data))
            .catch(err => alert(err.response.data))
    }, []);

    function choosenCity(name) {

        selectCity(name);
        if(window.confirm(`Quer seguir e ver as opções para a cidade ${name} ?`)) {
            navigate("/options");
        }
    }

    function toggleDropdown() {

        setIsOpen(!isOpen);
    }

    return (
        <MenuHomePageContainer>
            <DropdownWrapper>
                <DropdownButton onClick={toggleDropdown}></DropdownButton>
                <DropdownContent isOpen={isOpen}>

                    {cities.map((row) =>
                        <DropdownItem
                            key={row.id}
                            onClick={() => choosenCity(row.name)}
                        >
                            {row.name}
                        </DropdownItem>
                    )}

                </DropdownContent>
            </DropdownWrapper>
        </MenuHomePageContainer>
    )
}

const MenuHomePageContainer = styled.main`
    display: flex;
    flex-direction: column;
`;
const DropdownWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const DropdownButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`;

const DropdownContent = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
`;

const DropdownItem = styled.option`
  display: block;
  color: black;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;