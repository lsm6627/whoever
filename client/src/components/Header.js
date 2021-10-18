import {
  Headerdiv,
  Menu_icon,
  Logo,
  Loginbutton,
  Header_button_container
} from './Header.style';

const Header = ({ isLogin }) => {
  return (
    <Headerdiv>
      <Menu_icon className="fas fa-bars" />
      <Logo>Whoever</Logo>
      <Header_button_container>
        {isLogin ? (
          <Loginbutton>Logout</Loginbutton>
        ) : (
          <Loginbutton>Login</Loginbutton>
        )}
      </Header_button_container>
    </Headerdiv>
  );
};

export default Header;
