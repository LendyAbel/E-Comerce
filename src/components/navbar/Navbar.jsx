import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MenuButton from "./ui/MenuButton";
import Logo from "./ui/Logo";
import MenuDesktop from "./ui/MenuDesktop";
import SearchBar from "./ui/SearchBar";
import CartIcon from "./ui/CartIcon";
import MenuMobile from "./ui/MenuMobile";
import UserIcon from './ui/UserIcon'

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contactUs" },
];

const navbarAnimation = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.3 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md"
      {...navbarAnimation}
    >
      <div className="flex h-18 items-center justify-around p-2">
        <Logo />
        <div className="hidden md:block">
          <MenuDesktop menuItems={menuItems} />
        </div>
        <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <AnimatePresence>
          {isMenuOpen && <MenuMobile menuItems={menuItems} setIsMenuOpen={setIsMenuOpen} />}
        </AnimatePresence>
        <SearchBar />
        <div className='hidden md:block'>
          <UserIcon/>
        </div>
        <CartIcon />
      </div>
    </motion.nav>
  );
};

export default Navbar;
