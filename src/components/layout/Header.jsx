import Navbar from "../navbar/Navbar";

const Header = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Header;
