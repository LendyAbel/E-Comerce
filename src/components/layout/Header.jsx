import Navbar from "../navbar/Navbar";

const Header = ({ children, cartList }) => {
  return (
    <div>
      <Navbar cartList={cartList} />
      {children}
    </div>
  );
};

export default Header;
