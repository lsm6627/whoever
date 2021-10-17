import {
  Headerdiv,
  Menu_icon,
  Logo,
  Loginbutton,
  Logoutbutton,
  Header_button_container
} from './Header.style';

const Header = () => {
  return (
    <Headerdiv>
      <Menu_icon className="fas fa-bars" />
      <Logo>Whoever</Logo>
      <Header_button_container>
        <Loginbutton>로긴!</Loginbutton>
        <Logoutbutton>아웃!!</Logoutbutton>
      </Header_button_container>
    </Headerdiv>
  );
};

export default Header;
