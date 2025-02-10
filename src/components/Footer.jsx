import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { ButtonGroup, Button } from "keep-react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={`xl:px-[6%] bg-[#292929] dark:bg-metal-900 shadow-small `}>
      <div className="mx-auto lg:px-20 px-6 py-10 2xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-3 ">
            <div className="flex items-center">
              <img className="w-7 h-7 " src={Logo} />
              <h3 className="text-error-800 text-3xl font-bold ">
                Bangla Bhoj
              </h3>
            </div>

            <p className="text-metal-200 mb-2 dark:text-metal-300">
              484 Trevor Junctions, Hettieport-17316, Columbia, USA
            </p>
            <p className="flex items-center gap-2 text-metal-200 mb-2 dark:text-metal-300">
              <FaPhone />
              16784518001
            </p>
            <p className="flex items-center gap-2 text-metal-200 dark:text-metal-300">
              <FaEnvelope />
              info@tutorworld.com
            </p>
          </div>

          <div className="w-full lg:w-1/2 mx-auto flex justify-between gap-6 md:justify-aroundq">
            <footer>
              <h4
                className={`mb-3 text-body-3 text-xl font-semibold text-white`}
              >
                Social Media
              </h4>
              <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-200  dark:text-metal-300">
                <Link
                  to="https://www.facebook.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaFacebook />
                  Facebook
                </Link>
                <Link
                  to="https://www.facebook.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaInstagram />
                  Facebook
                </Link>
                <Link
                  to="https://www.linkedin.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaLinkedin />
                  LinkedIn
                </Link>
                <Link
                  to="https://x.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaTwitter />
                  Twitter
                </Link>
                <Link
                  to="https://youtube.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaYoutube />
                  Youtube
                </Link>
              </ul>
            </footer>

            <footer className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-3">
              <h4
                className={`mb-3 text-body-3 text-xl font-semibold text-white dark:text-white `}
              >
                Subscribe
              </h4>
              <p className="text-metal-200">
                Subscribe to our newsletter and never miss out on exclusive
                discounts, special offers
              </p>
              <div>
                <fieldset className="relative w-full lg:w-72  ">
                  <ButtonGroup>
                    <input
                      className="border-none outline-none py-2 pl-2 rounded-l-md border-[#CC3333]"
                      placeholder="Enter Your Email"
                    />
                    <Button
                      position="end"
                      className="bg-[#CC3333] hover:bg-metal-600"
                    >
                      Subscribe
                    </Button>
                  </ButtonGroup>
                </fieldset>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className={`border-t border-t-metal-400 py-5 text-cente `}>
        <p className="text-body-4 font-normal text-center text-metal-200 dark:text-metal-300">
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link href="/" target="_blank" className="font-medium">
            Bangla Bhoj ltd
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
