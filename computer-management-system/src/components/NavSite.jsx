import { LiBar, NavBar, UlBar } from "../styled-components/styled-components";

function NavSite() {
  return (
    <>
      <NavBar>
        <UlBar>
          <LiBar>Inicio</LiBar>
          <LiBar>Contato</LiBar>
          <LiBar>Serviços</LiBar>
          <LiBar>Sobre Serviços de TI</LiBar>
        </UlBar>
      </NavBar>
    </>
  );
}

export default NavSite;
