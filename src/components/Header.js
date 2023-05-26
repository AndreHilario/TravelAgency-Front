import { FaPlane, FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function Header({ setFilterApplied }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const location = useLocation();

    const showBackArrow = location.pathname !== "/";
    const notShow = location.pathname === "/";

    function handleSidebar() {
        setShowSidebar(!showSidebar);
    }

    return (
        <HeaderContainer>
            {notShow && (
                <Title>
                    <b>Viagens Alucinantes</b>: Conheça os destinos mais procurados do
                    mundo e reserve o seu lugar!
                </Title>
            )}
            {showBackArrow && (
                <>
                    {showSidebar && <Sidebar setFilterApplied={setFilterApplied} setShowSidebar={setShowSidebar} showSidebar={showSidebar} />}
                    <IconContainer>
                        <FaPlane onClick={handleSidebar} />
                    </IconContainer>
                    Viagens Alucinantes
                    <IconContainer>
                        <BackLink to="#" onClick={() => window.history.back()}>
                            <FaArrowLeft />
                        </BackLink>
                    </IconContainer>
                </>
            )}

        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0000cd;
  border-radius: 12px;
  height: 80px;
  width: 100%;
  font-size: 44px;
  font-style: italic;
  color: white;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;
  position: relative;
  cursor: pointer;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: white;
  text-decoration: none;
  font-size: 45px;
`;

