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
  TooltipArrow,
} from "keep-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ShoppingCart } from "phosphor-react";

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
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavbarList>

        <NavbarList>
          <TooltipProvider>
            <Tooltip>
              <TooltipAction asChild>
                <Button variant="softBg" shape="circle">
                  <ShoppingCart size={20} />
                </Button>
              </TooltipAction>
              <TooltipContent>
                <TooltipArrow />
                Item 1
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavbarList>

        <NavbarCollapseBtn />
        <NavbarCollapse className="bg-primary-25 dark:text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
