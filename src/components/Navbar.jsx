import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarList,
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipProvider,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
} from "keep-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      className={`sticky top-0 z-30 px-[2%] lg:px-[7%] shadow-lg rounded-none`}
    >
      <NavbarContainer className="mx-auto p-2 md:p-0 ">
        <NavbarBrand>
          {/* <img src={KeepLogo} alt="keep" /> */}
          <Link
            to="/"
            className="flex justify-center items-center text-2xl text-error-400 font-semibold gap-1"
          >
            <img className="w-6 h-6" src={Logo} />
            <h4>Bangla Bhoj</h4>
          </Link>
        </NavbarBrand>
        <NavbarList className="space-x-5 dark:text-white">
          <NavLink to="/">Home</NavLink>
        </NavbarList>

        <NavbarCollapseBtn />
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
