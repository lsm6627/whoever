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
          <Loginbutton>로그아웃</Loginbutton>
        ) : (
          <Loginbutton>로그인</Loginbutton>
        )}
      </Header_button_container>
    </Headerdiv>
  );
};

export default Header;
