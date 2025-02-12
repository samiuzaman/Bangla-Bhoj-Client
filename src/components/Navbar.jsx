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
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { storeContext } from "../Context/StoreData";

const NavbarComponent = () => {
  const location = useLocation();
  const { cart, setCart } = useContext(storeContext);

  return (
    <Navbar
      className={`w-full sticky top-0 z-30 px-[2%] lg:px-[7%] rounded-none border-none bg-opacity-55`}
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
          <NavLink to="/all-menu">All Menu</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavbarList>

        <div className="flex justify-center items-center gap-3">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipAction asChild>
                <Link to="/dashboard">
                  <Button variant="softBg" shape="circle">
                    <ShoppingCart className="relative" size={20} />
                    {cart?.length > 0 ? (
                      <span className="absolute top-5 md:top-3 text-white text-sm bg-error-500 w-5 rounded-full h-5 ml-4">
                        {cart?.length}
                      </span>
                    ) : (
                      ""
                    )}
                  </Button>
                </Link>
              </TooltipAction>
              <TooltipContent className="w-44 bg-white border-metal-300 flex flex-col justify-center">
                <div>
                  {cart?.map((item) => (
                    <div className="flex gap-2 border-b-2 items-center py-1">
                      <img className="w-10 h-10" src={item?.image} />
                      <div>
                        <p className="text-black">{item?.name}</p>
                        <p className="text-black">{item?.price} TK</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/dashboard">
                  <Button className="w-full text-body-5 font-medium text-white bg-error-500 mt-2">
                    Go to Cart
                  </Button>
                </Link>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <NavbarCollapseBtn />
          <NavbarCollapse className="bg-primary-25 dark:text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-menu">All Menu</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </NavbarCollapse>
        </div>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
