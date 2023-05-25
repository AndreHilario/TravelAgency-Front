import { FaPlane, FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <IconContainer>
                <FaPlane />
            </IconContainer>
            Viagens Alucinantes
            <IconContainer>
                <FaArrowLeft />
            </IconContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0000cd;
  height: 80px;
  width: 100%;
  font-size: 44px;
  font-style: italic;
  color: white;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;
